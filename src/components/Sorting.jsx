import { useState } from "react";
import { useProductData } from "../Hooks";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const {sortByPrice} = useProductData();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  
  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Sort
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute z-10 mt-2 left-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <span
              onClick={() => sortByPrice('low-to-high')}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Low to High
            </span>
            <span
              onClick={() => sortByPrice("high-to-low")}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
