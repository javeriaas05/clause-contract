import React, { useState } from "react";

const AnnouncementSwitch: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="flex items-center justify-center mb-6">
            <button
                onClick={toggleSwitch}
                className={`
          relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-300 ease-in-out
       
          ${isOn ? "bg-[#083123] " : "bg-gray-300"}
        `}
            >
                <span
                    className={`
            inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out
            ${isOn ? "translate-x-5" : "translate-x-1"}
          `}
                />
            </button>
        </div>
    );
};

export default AnnouncementSwitch;
