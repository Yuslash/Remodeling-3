import { useState } from "react";
import { X, AlertTriangle, MinusCircle } from "lucide-react";

const FlagAlertModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const modalContent = {
    empty: {
      icon: <AlertTriangle size={32} className="text-yellow-500" />,
      title: "Flag Cannot Be Empty",
      message: "The flag field cannot be left empty. Please provide a valid flag before submitting.",
      buttonLabel: "Got it",
      bgColor: "bg-yellow-50",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
    space: {
      icon: <MinusCircle size={32} className="text-red-500" />,
      title: "Flag Cannot Contain Spaces",
      message: "The flag cannot contain spaces. Please make sure there are no spaces in the flag.",
      buttonLabel: "Understood",
      bgColor: "bg-red-50",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
  };

  const currentModal = modalContent[type];

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/40">
      <div className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-md ${currentModal.bgColor}`}>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Icon Section */}
            {currentModal.icon}
            <h2 className="text-xl font-semibold text-gray-800">{currentModal.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Message Section */}
        <p className="text-gray-600 text-sm mb-4">{currentModal.message}</p>

        {/* Action Button */}
        <button
          onClick={onClose}
          className={`w-full px-4 py-2 rounded-lg text-white ${currentModal.buttonColor} transition cursor-pointer`}
        >
          {currentModal.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default FlagAlertModal;
