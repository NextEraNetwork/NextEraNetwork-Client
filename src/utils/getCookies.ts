export const getCookies = (): { [key: string]: string } => {
    const cookies: string[] = document.cookie.split('; ');
    const cookieMap: { [key: string]: string } = {};

    cookies.forEach(cookie => {
        const [key, value] = cookie.split('=');
        if (key) {
            cookieMap[key] = decodeURIComponent(value);
        }
    });

    return cookieMap;
};
