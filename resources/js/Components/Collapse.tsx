import React, { useState } from "react";
interface CollapseProps {
    title: string;
    description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 rounded-md my-2">
            <button
                className="w-full p-2 bg-gray-100 border-b border-gray-300 text-left cursor-pointer text-lg hover:bg-gray-200 dark:bg-darkSurface dark:border-gray-700 dark:text-gray-200"
                onClick={toggleCollapse}
            >
                {title}
            </button>
            {isOpen && (
                <div className="p-2 bg-white">
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
