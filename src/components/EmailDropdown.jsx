import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaCopy } from "react-icons/fa";

const ICON_SIZE = 24;
const EMAIL = "corbinstickley@gmail.com";

export default function EmailDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    alert("Email address copied to clipboard!");
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
        <div className="flex items-center">
            <button
                onClick={() => setOpen(!open)}
                aria-label="Email"
                className="text-gray-600 hover:text-blue-700 focus:outline-none"
            >
            <FaEnvelope size={ICON_SIZE} />
            </button>
        </div>
        <div
            className={`absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-3 text-sm transform origin-top transition-all duration-200 ease-out ${
                open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
            }`}
        >
            <div className="mx-1 flex items-center justify-between mb-2">
                <span className="text-gray-800 truncate">{EMAIL}</span>
                <button
                onClick={handleCopy}
                className="text-gray-500 hover:text-blue-700 ml-2"
                aria-label="Copy Email"
                >
                <FaCopy size={ICON_SIZE * 2 / 3} />
                </button>
            </div>
            <a
                href={`mailto:${EMAIL}`}
                className="block text-blue-600 hover:underline text-center border rounded-md"
            >
                Send Email
            </a>
        </div>
    </div>
  );
}