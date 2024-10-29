import axios, { AxiosResponse } from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({});

type BodyData = 
  | string 
  | number 
  | boolean 
  | null 
  | JSON
  | { [key: string]: any }  // For more complex objects
  | Array<any>;  // For arrays

type Params = 
  | string 
  | number 
  | boolean 
  | null 
  | { [key: string]: string | number | boolean | null };

// Define types for the API connector parameters
interface ApiConnectorProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'; // Added OPTIONS to the type
  url: string;
  bodyData?: BodyData; // You can define a more specific type if needed
  headers?: Record<string, string>; // For headers
  params?: Params; // For query parameters
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
