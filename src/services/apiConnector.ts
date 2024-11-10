import axios, { AxiosResponse } from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({});

type BodyData = 
  | string 
  | number 
  | boolean 
  | null 
  | JSON
  | { [key: string]: any }  
  | Array<any>;  

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
  bodyData?: BodyData; 
  headers?: Record<string, string>; 
  params?: Params; 
  withCredentials?: boolean;
}

// Define the API connector function
export const apiConnector = async ({
  method,
  url,
  bodyData = null,
  headers = {},
  params = {},
  withCredentials = false
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
      withCredentials
    });

    return response;
  } catch (error) {
    console.error("apiConnector Error:", error); // More informative error logging
    throw error;
  }
};
