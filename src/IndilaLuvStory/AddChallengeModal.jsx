// AddChallengeModal.jsx
import React, { useState } from "react"

const AddChallengeModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("")

  if (!isOpen) return null

  const handleAdd = () => {
    if (title.trim() === "") {
      alert("Please enter a challenge title.")
      return;
    }
    onAdd(title)
    setTitle("")
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-transparent transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Challenge</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Challenge Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter challenge title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          >
            Create Challenge
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddChallengeModal
