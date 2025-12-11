// types.ts
export type GenderType = 'male' | 'female' | 'other';
export type CategoryType = 'GEN' | 'SC' | 'ST' | 'OBC';
export type StateType = 'andhra_pradesh' | 'other_states'; // Add all states as needed

export interface ProfileData {
    firstname: string;
    middlename?: string;
    lastname: string;
    gender: GenderType | string;
    abcID?: string;
    category: CategoryType | string;
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

export interface ExperienceData {
    jobTitle: string;
    experienceType:string;
    companyName: string;
    description: string | null;
    jobMode: string;
    location: string | null;
    start_date: string;
    end_date: string;
    continuing: boolean;
}

export interface EducationData {
    insitutionName: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
    grade: number | null;
    description: string | null;
  }

export interface AchievementData {
    title: string;
    description: string;
    date_achieved: string;
    awardingOrganization: string;
}

export interface CertificationData {
    certificationName: string;
    issuingOrganization: string;
    certificateURL: string;
    issue_date: string;
    expiry_date: string;
    description: string;
}

export interface ProjectData {
    projectName: string;
    description: string;
    technology: string[];
    projectURL: string;
    start_date: string;
    end_date: string;
}
