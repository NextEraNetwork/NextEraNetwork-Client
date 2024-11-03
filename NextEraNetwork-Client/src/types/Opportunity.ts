export interface Opportunity {
    id: string; 
    profile: string;       // Assuming you have a profile reference
    company: string;
    branch: string;
    positionType: string;
    yearOfExperience: number;
    opportunityLink: string;
    applicationDeadline: string;
    createdAt: string;
    description: string;   // New field for the opportunity description
}