'use client';
import CryptoJS from 'crypto-js';
const SECRET_KEY = process.env.SECRET_KEY || "";

interface SessionData {
    userId?: string;
    // Add other properties as necessary
}

export function decrypt(encryptedData: string | undefined): SessionData | null {
    if (!encryptedData) {
        return null; // Return null if there's no data to decrypt
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        return decryptedData ? JSON.parse(decryptedData) : null;
    } catch (error) {
        console.error('Decryption error:', error);
        return null; // Return null if decryption fails
    }
}