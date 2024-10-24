import React from 'react';

const PreLoader: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="border-4 border-t-blue-600 border-gray-200 rounded-full w-6 h-6 animate-spin"></div>
        </div>
    );
};

export default PreLoader;
