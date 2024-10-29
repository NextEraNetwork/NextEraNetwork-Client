// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export const getDataFromToken = (request: NextRequest) => {
//     try {
//         const token = request.cookies.get("access_token")?.value || '';
//         console.log("token in token", token);
//         const decodedToken:any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
//         return token;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// }

import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";  // Make sure cookies-next is installed

export const getDataFromToken = (request?: NextRequest) => {
    try {
        // Check if running on the server-side with `NextRequest`, else use `getCookie`
        const token = request 
            ? request.cookies.get("refresh_token")?.value || ''
            : getCookie("refresh_token") as string || '';  // Fallback for client-side or SSR

        if (!token) throw new Error("Token not found");

        console.log("Token retrieved:", token);

        // Decode the token
        const decodedToken: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        return decodedToken;
    } catch (error: any) {
        throw new Error(`Token decoding error: ${error.message}`);
    }
};


export function getCookieValue(cookieName: string): string | undefined {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) return decodeURIComponent(value);
    }
    return undefined;
}

// Example usage
const accessToken = getCookieValue("access_token");
const refreshToken = getCookieValue("refresh_token");

console.log("Access Token:", accessToken);
console.log("Refresh Token:", refreshToken);

