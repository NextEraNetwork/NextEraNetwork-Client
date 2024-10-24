import { AppDispatch } from '@/reducer/store'; // Adjust the import according to your file structure
import { setUniversities } from '@/reducer/studentSlices/universitySlice';
import { apiConnector } from '@/services/apiConnector';
import { superAdminEndpoints } from '@/services/api';
import { toast } from 'react-toastify';

const {
    GET_UNIVERSITY_API
} = superAdminEndpoints;

export const fetchUniversities = () => async (dispatch: AppDispatch) => {

    // Dispatch the action to set universities in state
    console.log("Fetching universities");

    try {
        console.log("Fetching universities from API...");

        const response = await apiConnector({
            method: 'GET',
            url: 'https://2d10-2401-4900-5231-e0ad-5433-f12-8726-176c.ngrok-free.app/api/v1/university/get/university',
            headers: {
                'Accept': 'application/json',
                // If authentication is needed, uncomment this:
                // 'Authorization': `Bearer ${token}`,
            },
        });

        // Log the response details for better debugging
        console.log("Full response of university:", response);

        // Check if response status is OK (200)
        if (response && response.status === 200 && response.data) {
            console.log("Success response data:", response.data);

            // Check if the response structure matches the expected format
            if (response.data.success && Array.isArray(response.data.data)) {
                const universities = response.data.data;
                console.log("Universities fetched:", universities);
                // Dispatch action or handle universities data
                // dispatch(setUniversities(universities));
                toast.success("Universities fetched successfully");
            } else {
                console.error("Unexpected response structure:", response.data);
                toast.error("Failed to fetch universities. Invalid response structure.");
            }
        } else {
            console.error("Unexpected response status or no data:", response);
            toast.error("Failed to fetch universities. Please try again.");
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error while fetching universities:", error);
        toast.error("An error occurred while fetching universities.");
    }

}


// export const fetchUniversities = () => async (dispatch: AppDispatch) => {

//     // Dispatch the action to set universities in state
//     console.log("Fetching universities");

//     try {
//         console.log("Fetching universities from API...");

//         const response = await apiConnector({
//             method: 'GET',
//             url: 'https://2d10-2401-4900-5231-e0ad-5433-f12-8726-176c.ngrok-free.app/api/v1/college/university/college',
//             headers: {
//                 'Accept': 'application/json',
//                 // If authentication is needed, uncomment this:
//                 // 'Authorization': `Bearer ${token}`,
//             },
//             params: {
//                 university :"hello"
//             }
//         });

//         // Log the response details for better debugging
//         console.log("Full response of university:", response);

//         // Check if response status is OK (200)
//         if (response && response.status === 200 && response.data) {
//             console.log("Success response data:", response.data);

//             // Check if the response structure matches the expected format
//             if (response.data.success && Array.isArray(response.data.data)) {
//                 const universities = response.data.data;
//                 console.log("Universities fetched:", universities);
//                 // Dispatch action or handle universities data
//                 // dispatch(setUniversities(universities));
//                 toast.success("Universities fetched successfully");
//             } else {
//                 console.error("Unexpected response structure:", response.data);
//                 toast.error("Failed to fetch universities. Invalid response structure.");
//             }
//         } else {
//             console.error("Unexpected response status or no data:", response);
//             toast.error("Failed to fetch universities. Please try again.");
//         }
//     } catch (error) {
//         // Log the error for debugging purposes
//         console.error("Error while fetching universities:", error);
//         toast.error("An error occurred while fetching universities.");
//     }

// }