import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

const SameContentModal = ({ isOpen, onClose, type }) => {
    let message = "";
    let icon = <AlertTriangle size={24} className="text-yellow-500" />;
    let buttonText = "Close";

    switch (type) {
        case "BothSame":
            message = "No changes detected. Please modify the Title, Description, or Avatar before submitting.";
            icon = <AlertTriangle size={24} className="text-red-500" />;
            break;
        case "AvatarNotChanged":
            message = "No changes were made to the avatar. Please update the avatar or modify the Title/Description.";
            icon = <AlertTriangle size={24} className="text-red-500" />;
            break;
        case "TitleEmpty":
            message = "Title cannot be empty. Please provide a title.";
            icon = <AlertTriangle size={24} className="text-red-500" />;
            break;
        case "DescriptionEmpty":
            message = "Description cannot be empty. Please provide a description.";
            icon = <AlertTriangle size={24} className="text-red-500" />;
            break;
        default:
            message = "Unexpected issue.";
            icon = <AlertTriangle size={24} className="text-gray-500" />;
            break;
    }

    return (
        <div className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/40 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        {icon}
                        <h2 className="text-xl font-semibold text-gray-800">Content Are Same</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <X size={24} />
                    </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full px-4 py-2 rounded-lg text-white bg-red-500 transition cursor-pointer"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default SameContentModal;
