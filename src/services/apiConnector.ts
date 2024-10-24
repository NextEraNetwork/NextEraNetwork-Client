// import axios, { AxiosResponse } from "axios";

// // Create an Axios instance
// export const axiosInstance = axios.create({});

// // Define types for the API connector parameters
// interface ApiConnectorProps {
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
//   url: string;
//   bodyData?: any;                                       // You can define a more specific type if needed
//   headers?: Record<string, string>;                     // For headers
//   params?: Record<string, any>;                         // For query parameters
// }

// // Define the API connector function
// export const apiConnector = async ({
//   method,
//   url,
//   bodyData = null,
//   headers = {},
//   params = {},
// }: ApiConnectorProps): Promise<AxiosResponse<any>> => {
//   try {
//     const response = await axiosInstance({
//       method,
//       url,
//       data: bodyData,
//       headers,
//       params,
//     });

//     return response;
//   } catch (error) {
//         console.log("apiConnetor Error")
//     throw error;
//   }
// };






// import axios, { AxiosResponse } from 'axios';

// interface ApiConnectorProps {
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
//   url: string;
//   bodyData?: any;                                       // You can define a more specific type if needed
//   headers?: Record<string, string>;                     // For headers
//   params?: Record<string, any>;                         // For query parameters
// }

// // Create an Axios instance with base settings
// export const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set base URL for easier requests
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });


// // Define the API connector function
// export const apiConnector = async ({
//   method,
//   url,
//   bodyData = null,
//   headers = {},
//   params = {},
// }: ApiConnectorProps): Promise<AxiosResponse<any>> => {
//   try {
//     const response = await axiosInstance({
//       method :`${method}`,
//       url: `${url}`,
//       data: `${bodyData}`,
//       headers,
//       params,
//     });
//     return response;
//   } catch (error: any) {
//     if (error.response) {
//       // Server responded with an error
//       console.error('API Error:', error.response.data);
//     } else {
//       // No response from the server or other issues
//       console.error('Network Error:', error.message);
//     }
//     throw error;
//   }
// };









import axios, { AxiosResponse } from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({});

// Define types for the API connector parameters
interface ApiConnectorProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'; // Added OPTIONS to the type
  url: string;
  bodyData?: any; // You can define a more specific type if needed
  headers?: Record<string, string>; // For headers
  params?: Record<string, any>; // For query parameters
}

// Define the API connector function
export const apiConnector = async ({
  method,
  url,
  bodyData = null,
  headers = {},
  params = {},
}: ApiConnectorProps): Promise<AxiosResponse<any>> => {
  try {
    // Default to GET if method is OPTIONS
    const requestMethod = method === 'OPTIONS' ? 'GET' : method;

    const response = await axiosInstance({
      method: requestMethod,
      url,
      data: bodyData,
      headers,
      params,
    });

    return response;
  } catch (error) {
    console.error("apiConnector Error:", error); // More informative error logging
    throw error;
  }
};
