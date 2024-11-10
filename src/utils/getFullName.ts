export function getFullName(firstname: string | null, middlename: string | null, lastname: string | null ) {
    // Filter out null/undefined values and join the non-null values with a space
    return [firstname, middlename, lastname]
        .filter(Boolean)  // Removes falsy values (null, undefined, etc.)
        .join(' ');       // Joins the values with a space
}
