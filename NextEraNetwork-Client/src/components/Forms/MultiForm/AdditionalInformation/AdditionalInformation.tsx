// AdditionalInformation.tsx
import React from 'react';
import { ProfileData } from '@/types/MultiForm';
import InputTextArea from '../../Inputs/InputTextArea';
import SkillManager from './SkillManager';
import LinkInput from './LinkInput';

interface AdditionalInformationProps {
    formData: ProfileData;
    handleChange: (newData: Partial<ProfileData>) => void;
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({ formData, handleChange }) => {

    const handleLinkChange = (platform: string) => (value: string) => {
        handleChange({ links: { ...formData.links, [platform]: value } });
    };

    const handleAddSkill = (newSkill: string) => {
        handleChange({
            skills: [...formData.skills, newSkill],
        });
    };

    const handleRemoveSkill = (index: number) => {
        handleChange({
            skills: formData.skills.filter((_, i) => i !== index),
        });
    };

    const handleAddHobbies = (newHobbies: string) => {
        handleChange({
            hobbies: [...formData.hobbies, newHobbies],
        });
    };

    const handleRemoveHobbies = (index: number) => {
        handleChange({
            hobbies: formData.hobbies.filter((_, i) => i !== index),
        });
    };

    const handleAddLangauges = (newHobbies: string) => {
        handleChange({
            languages: [...formData.languages, newHobbies],
        });
    };

    const handleRemoveLanguage = (index: number) => {
        handleChange({
            languages: formData.languages.filter((_, i) => i !== index),
        });
    };



    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Section 3: Additional Information</h2>
            <InputTextArea
                label="About"
                value={formData.about || ''}
                onChange={(value) => handleChange({ about: value })}
                placeholder="Write about yourself (max length 1000)"
                required={true}
            />
            {/* skills */}
            <SkillManager
                skills={formData.skills}
                onAddSkill={handleAddSkill}
                onRemoveSkill={handleRemoveSkill}
                label="Professional Skills"
                placeholder="Enter your skills here"
            />

            {/* hobbies */}
            <SkillManager
                skills={formData.hobbies}
                onAddSkill={handleAddHobbies}
                onRemoveSkill={handleRemoveHobbies}
                label="Hobbies"
                placeholder="Enter your hobbies here"
            />

            {/* languages */}
            <SkillManager
                skills={formData.languages}
                onAddSkill={handleAddLangauges}
                onRemoveSkill={handleRemoveLanguage}
                label="Professional language"
                placeholder="Language"
            />

            {/* links  */}

            <div className='md:grid md:grid-cols-2 md:gap-x-10'>
                <LinkInput
                    label="GitHub"
                    value={formData.links.github || ''}
                    onChange={handleLinkChange('github')}
                />
                <LinkInput
                    label="LinkedIn"
                    value={formData.links.linkedin || ''}
                    onChange={handleLinkChange('linkedin')}
                />
                <LinkInput
                    label="Twitter"
                    value={formData.links.twitter || ''}
                    onChange={handleLinkChange('twitter')}
                />
                <LinkInput
                    label="Facebook"
                    value={formData.links.facebook || ''}
                    onChange={handleLinkChange('facebook')}
                />
            </div>
            <p className="text-sm text-gray-500">
                * This section is optional. Feel free to provide additional details to enhance your profile.
            </p>


        </div>
    );
};

export default AdditionalInformation;
