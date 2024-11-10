export interface ProfileData {
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    profession: string;
    position: string;
    passOut_Year: string;
    profileImage: string;
    university: string;
    college: string;
    department: string;
    courses: string;
    branch: string;
}

export interface UsersData {
    _id: string;
    firstName: string;
    lastName: string;
    userName:string;
    middleName: string;
    email:string;
    abcID: string;
    about: string;
    branch: string;
    category: string;
    college: string;
    courses: string;
    coverImage: string | null;
    created_at: string;
    department: string;
    enrollmentID: string[];
    enrollmentNumber: string;
    gender: string;
    hobbies: string[];
    languages: string[];
    links: { type: string; url: string }[];
    passOut_Year: number | null;
    position: string;
    profession: string;
    profileImage: string;
    skills: string[];
    state: string;
    university: string;
    updated_at: string;
   
};

export interface UserExperienceData {
    _id: string;
    jobTitle: string;
    experienceType: string;
    companyName: string;
    description: string | null;
    jobMode: string;
    location: string | null;
    start_date: string;
    end_date: string;
    continuing: boolean;
}

export interface UserProjectData {
    _id: string;
    projectName: string;
    description: string;
    technology: string[];
    projectURL: string;
    start_date: string;
    end_date: string;
}

export interface UserEducationData {
    _id: string,
    insitutionName: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
    grade: number | null;
    description: string | null;
}

export interface UserAchievementData {
    _id: string;
    title: string;
    description: string;
    date_achieved: string;
    awardingOrganization: string;
}

export interface UserCertificationData {
    _id: string,
    certificationName: string;
    issuingOrganization: string;
    certificateURL: string;
    issue_date: string;
    expiry_date: string;
    description: string;
}