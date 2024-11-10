import React from "react";
import Link from "next/link";

export default function Users() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <p className="text-blue-500 underline">Go back to Home</p>
            </Link>
        </div>
    )
}