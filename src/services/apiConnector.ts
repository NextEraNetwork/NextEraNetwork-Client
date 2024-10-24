import axios, { AxiosResponse } from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({});

// Define types for the API connector parameters
interface ApiConnectorProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  bodyData?: any;                                       // You can define a more specific type if needed
  headers?: Record<string, string>;                     // For headers
  params?: Record<string, any>;                         // For query parameters
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
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });

    return response;
  } catch (error) {
        console.log("apiConnetor Error")
    throw error;
  }
};
