import EducationForm from "@/components/Forms/Student/ProfileForm/EducationForm";
import ExperienceForm from "@/components/Forms/Student/ProfileForm/ExperienceForm";
import React from "react";

const updateProfile: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16 px-32">

            <div className="w-full bg-white p-12">
                <EducationForm />
                <ExperienceForm/>
            </div>
        </div>
    )
}

export default updateProfile;