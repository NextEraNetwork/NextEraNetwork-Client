import { Dispatch, SetStateAction } from 'react';
import { apiConnector } from "../../apiConnector";
import { clearToken, setLoading, setToken } from "@/reducer/studentSlices/authSlice";
import { authEndpoints, } from "../../api";
import { toast } from 'react-toastify';
import { AppDispatch } from '@/reducer/store';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { NextRequest } from "next/server";

const {
    SIGNUP_API,
    SEND_OTP_API,
    LOGIN_API,
    LOGOUT_API,
    RESETPASSWORDTOKEN_API,
    RESETPASSWORD_API
} = authEndpoints;

interface SignupData {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// interface ResetPassword {
//     password: string,
//     confirmPassword: string,
//     token: string,
//     setEmailSent: Dispatch<SetStateAction<boolean>>
// }

export const sendOtp = (email: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: SEND_OTP_API,
            bodyData: email
        });

        if (response.status === 200) {
            toast.success(`OTP successfully sent on ${email}.`)
            return true;
        }
        else {
            toast.error(`Failed to send OTP. Please try again.`)
            return false;
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const signupUser = (signupData: SignupData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    console.log("signupUser", signupUser);

    try {
        const response = await apiConnector({
            method: 'POST',
            url: SIGNUP_API,
            bodyData: signupData,
        });

        dispatch(setToken(response.data.token));                // Assuming the token is returned in the response
    } catch (error) {
        console.log("error", error)
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
};

export const loginUser = (loginData: string, router: AppRouterInstance) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: LOGIN_API,
            bodyData: loginData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        console.log("login response", response);


        if (response.data.ok === true) {
            const token = document.cookie;

            console.log("token after login", token);

            if (token) {
                dispatch(setToken(token));
                toast.success("Login Successfully.");
                await new Promise(resolve => setTimeout(resolve, 100));
                router.push("/");
            }
            else {
                throw new Error("Token decoding failed");
            }
        }
        else {
            toast.error("Login credential error");
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const logoutUser = (token: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: LOGOUT_API,
            headers: {
                Authorization: `Bearer ${token}`,  // Send token in the Authorization header
            },
        })

        console.log("response", response);

        dispatch(clearToken());
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }

}

export const resetPasswordUser = (
    password: string,
    confirmPassword: string,
    token: string,
) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'PUT',
            url: RESETPASSWORD_API,
            bodyData: {
                password,
                confirmPassword,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success("Password Updated Successfully.");
        }


    } catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const passwordResetTokenUser = (email: string, token: string, setEmailSent: Dispatch<SetStateAction<boolean>>) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: RESETPASSWORDTOKEN_API,
            bodyData: email,
        });

        if (response.status === 200) {
            setEmailSent(true);
        }
    } catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}
