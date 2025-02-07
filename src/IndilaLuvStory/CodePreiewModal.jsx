import { useState } from "react";
import { Clipboard, X, Check } from "lucide-react";

const CodePreviewModal = ({ isOpen, onClose, itemId  }) => {
  if (!isOpen) return null;

  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeSnippets = [
    {
        title: "How to Add a Dynamic Flag",
        instruction: `Use this method to generate and log a dynamic flag. Replace \`userInput\` with the \`itemId\` (${itemId}) to generate a unique flag.`,
        code: `${itemId}`,
      },
      {
        title: "Arena Accordion ID Example",
        instruction: `Use the \`itemId\` (${itemId}) in your arena accordion logic. Here's an example of how to define and log the arena accordion ID.`,
        code: `const arenaAccordionId = "${itemId}";\nconsole.log("Accordion ID:", arenaAccordionId);`,
      },
  
  ]

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset copied state after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-black/40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Code Preview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {codeSnippets.map((snippet, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">{snippet.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{snippet.instruction}</p>
            <div className="relative bg-gray-900 text-white p-4 rounded-md">
              <pre className="overflow-auto">{snippet.code}</pre>
              <button
                onClick={() => copyToClipboard(snippet.code, index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white cursor-pointer"
              >
                {copiedIndex === index ? <Check size={20} className="text-green-400" /> : <Clipboard size={20} />}
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CodePreviewModal;
