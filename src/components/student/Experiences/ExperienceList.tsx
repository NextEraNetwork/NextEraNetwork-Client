import { ExperienceType } from "@/types/Experience";
import React from "react";
import ExperienceCard from "./ExperienceCard";

interface ExperienceListProps {
    experiences: ExperienceType[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({experiences}) =>{
    return(
        <div className = "space-y-4 " >
        {
            experiences.map(experiences => (
                <ExperienceCard key={experiences.title} experience={experiences} />
            ))
        }
        </div >
    )
}

export default ExperienceList;