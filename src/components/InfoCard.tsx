import React from "react";

// Define props type
interface InfoCardProps {
  title: string;
  icon: JSX.Element;
  description: string;
  animation: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, description, animation }) => {
  return (
    <div className={`info-card p-6 bg-white shadow-lg rounded-lg flex items-center ${animation}`}>
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
