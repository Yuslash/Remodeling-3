import { X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/40">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Modal Content */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Success!</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-4">Your application was successfully submitted!</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
