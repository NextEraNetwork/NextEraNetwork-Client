import { Dispatch, SetStateAction } from 'react';
import { apiConnector } from "../../apiConnector";
import { clearToken, setLoading, setToken } from "@/reducer/studentSlices/authSlice";
import { authEndpoints, userEndpoints } from "../../api";
import { toast } from 'react-toastify';
import { AppDispatch } from '@/reducer/store';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const {
    SIGNUP_API,
    SEND_OTP_API,
    LOGIN_API,
    LOGOUT_API,
    RESETPASSWORDTOKEN_API,
    POST_UPDATE_PASSWORD_API,
} = authEndpoints;

const {
    PUT_EMAIL_USERNAME_API
} =userEndpoints;

interface SignUpData {
    username: string;
    email: string;
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

export const signupUser = (signupData: SignUpData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: SIGNUP_API,
            bodyData: signupData,
            withCredentials: true
        });

        if (response.status === 200) {
            toast.success("Account created successfully");
            window.location.href = "/login";
        }
    } catch (error: any) {
        if (error.status === 409) {
            window.location.href = "/login";
            toast.error("User already exist.");
        }
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
            },
            withCredentials: true
        });

        console.log("login response", response);


        if (response.status === 200) {
            router.push("/");
            toast.success("Login Successfully.");
        }
        else {
            toast.error("Login credential error");
        }
    }
    catch (error: any) {
        if (error.status === 401) {
            toast.error("Credentials are not valid");
        }
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const logoutUser = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: LOGOUT_API,
            withCredentials:true
        })

        console.log("response", response);

        if(response.status === 200)
        {
            localStorage.clear();  
            sessionStorage.clear();
            dispatch(clearToken());
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }

}

export const updatePassword = (
    old_password: string,
    new_password: string,
) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_UPDATE_PASSWORD_API,
            bodyData: {
                old_password,
                new_password,
            },
            withCredentials:true
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

export const changeEmailUserName = (key: string, value: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'PUT',
            url: `${PUT_EMAIL_USERNAME_API}?${key}=${encodeURIComponent(value)}`,
            bodyData: {
                key : value
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
