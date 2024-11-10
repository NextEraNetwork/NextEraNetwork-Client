'use client';
import React, { useState } from 'react';
import LinkInput from '../../MultiForm/AdditionalInformation/LinkInput';
import { useSelector } from 'react-redux';
// import { RootState } from '@/reducer/store'

interface FormData {
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

interface Links {
  github?: string;
  twitter?: string;
}


interface RootState {
  profile: {
    profileData: {
      links: Links;
    };
  };
}

const LinkForm: React.FC = () => {
  const user =useSelector((state:RootState)=> state.profile.profileData.links)
  const [formData, setFormData] = useState<FormData>({
    links: {
      github: '',
      linkedin: '',
      twitter: '',
      facebook: '',
    },
  });

  const handleLinkChange = (platform: keyof FormData['links']) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      links: { ...prevData.links, [platform]: value },
    }));
  };

  const handleSave = () => {
    console.log('Saved data:', formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 mt-10">Links</h2>

      <div className="md:grid md:grid-cols-2 md:gap-x-10 mt-6">
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
      
      {/* <div className="md:grid md:grid-cols-2 md:gap-x-10 mt-6">
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
      </div> */}

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkForm;
