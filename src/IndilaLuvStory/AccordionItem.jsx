import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, onRemove, itemId, updateFlag, flagPlaceholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const [newFlag, setNewFlag] = useState("")
  const [ isStatic, setIsStatic ] = useState(false)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  const handleSumbitFlag = () => {
    updateFlag(newFlag)
    setNewFlag("")
  }

  const buttonToggle = () => {

    setIsStatic((prev) => !prev)
  }

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div className="w-full bg-white rounded-sm overflow-hidden text-black transition-all duration-300">
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        className="w-full h-[50px] flex items-center justify-between px-4 bg-white cursor-pointer"
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content with Smooth Transition */}
      <div
        ref={contentRef}
        className="transition-all duration-300 overflow-hidden"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={flagPlaceholder}
              className="w-[85%] p-2 border border-gray-300 rounded"
              value={newFlag}
              onChange={(e) => setNewFlag(e.target.value)}
            />
            <button onClick={isStatic ? handleSumbitFlag : undefined} className={`w-[15%] p-2 bg-indigo-600 ${isStatic ? 'cursor-pointer hover:bg-indigo-700' : 'cursor-not-allowed'} hover:bg-indigo-700 font-medium text-white rounded ml-2`}>
              Submit
            </button>
            <div onClick={buttonToggle} className={`px-6 py-2 ${isStatic ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'}  cursor-pointer font-medium text-white rounded-sm`}>
              {isStatic ? 'Static' : 'Dynamic'}
            </div>
            <div onClick={() => onRemove(itemId)} className="px-6 py-2 bg-red-600 hover:bg-red-700 cursor-pointer font-medium text-white rounded-sm">
              Remove
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
