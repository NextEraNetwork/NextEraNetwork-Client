import React from 'react';
import SelectDropdown from './SelectDropdown';
import { RiSearchLine } from "react-icons/ri";

interface FilterSectionProps {
  selectedName: string;
  branch: string;
  passOutYear: Date;
  profession: string;
  position: string;

  handleNameChange :(e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBranchChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePassOutyearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleProfessionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePositionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilterSection: React.FC<FilterSectionProps> = ({
  selectedName,
  branch,
  passOutYear,
  profession,
  position,
  handleNameChange,
  handleBranchChange,
  handlePassOutyearChange,
  handleProfessionChange,
  handlePositionChange,
}) => {

  const branchOptions = [
    { value: "Engineering", label: "Engineering" },
    { value: "Business", label: "Business" },
    { value: "Arts", label: "Arts" },
    { value: "Science", label: "Science" },
  ];

  const positionOptions = [
    { value: "Student", label: "Student" },
    { value: "Intern", label: "Intern" },
    { value: "Junior Developer", label: "Junior Developer" },
    { value: "Senior Developer", label: "Senior Developer" },
    { value: "Manager", label: "Manager" },
  ];

  const professionOptions = [
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Data Science", label: "Data Science" },
    { value: "Marketing", label: "Marketing" },
    { value: "Finance", label: "Finance" },
  ];

  const passOutYearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  return (
    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center py-8'>
      {/* Left filter section */}
      <div className='flex flex-row gap-2'>
        <SelectDropdown
          label="Branch"
          value={branch}
          options={branchOptions}
          onChange={handleBranchChange}
        />
        <SelectDropdown
          label="Position"
          value={position}
          options={positionOptions}
          onChange={handlePositionChange}
        />
        <SelectDropdown
          label="Profession"
          value={profession}
          options={professionOptions}
          onChange={handleProfessionChange}
        />
        <SelectDropdown
          label="Pass Out Year"
          value={"passOutYear"}
          options={passOutYearOptions}
          onChange={handlePassOutyearChange}
        />
      </div>

      {/* Right option section */}
      <div className="flex items-center w-full max-w-sm md:max-w-md bg-gray-100 rounded-lg px-4 py-2">
        <RiSearchLine className="text-grey mr-2" />
        <input
          value={selectedName}
          onChange={handleNameChange}
          type="text"
          placeholder="Search by name, email"
          className="bg-transparent outline-none w-full text-base"
        />
      </div>
    </div>
  );
};

export default UserFilterSection;
