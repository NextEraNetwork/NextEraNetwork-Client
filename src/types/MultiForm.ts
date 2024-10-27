// types.ts
export type GenderType = 'Male' | 'Female' | 'Other';
export type CategoryType = 'gen' | 'sc' | 'st' | 'obc';
export type StateType = 'andhra_pradesh' | 'other_states'; // Add all states as needed

export interface ProfileData {
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: GenderType | string;
    abcID?: string;
    category: CategoryType;
    profession: string;
    position: string;
    state: StateType | string;
    district: string
    about?: string;
    passOut_Year: number;
    skills: string[];
    hobbies: string[];
    links: Record<string, string>; // Assuming URL as string
    languages: string[];
    coverImage?: string;
    profileImage?: string;
    university: string;
    college: string;
    department: string;
    courses: string;
    branch: string;
    enrollmentNumber: string;
    // education: string[];
    // projects: string[];
    // experience: string[];
    // certification: string[];
    // achievement: string[];
}
