'use server';

import { cookies } from 'next/headers';
import { apiConnector } from '../apiConnector';
import { authEndpoints } from '../api';

const {
    LOGIN_API,
} = authEndpoints;

export async function serverLogin(urlEncodedBody: string) {
  try {
    const response = await apiConnector({
      method: 'POST',
      url: LOGIN_API,
      bodyData: urlEncodedBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.status !== 200 || !response.data) {
      return {
        success: false,
        message: response.data?.message || 'Invalid credentials',
      };
    }

    const {access_token, refresh_token, profile_id} = response.data;

    // This ONLY works on server
    cookies().set('refresh_token', refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 43200* 60,
    });

    cookies().set('access_token', access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    });

    cookies().set('profile_id', profile_id, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      message: 'Network error. Please try again.',
    };
  }
}

export async function serverLogout() {
  cookies().delete("access_token");
  cookies().delete("refresh_token");
  cookies().delete("profile_id");
}