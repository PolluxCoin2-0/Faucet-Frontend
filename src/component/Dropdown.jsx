import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Give me 50 POX"];

  return (
    <div className="w-64 relative">
      <button
        onClick={toggleDropdown}
        className="bg-white text-gray-700 w-full py-2 px-4 rounded-md flex justify-between items-center border border-gray-700"
      >
        <span>{selectedOption}</span>
        {isOpen ? <MdKeyboardArrowUp />: <MdKeyboardArrowDown />}
      </button>

      {isOpen && (
        <ul className="absolute top-10 left-0 w-full bg-white rounded-full border border-gray-700 shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="py-1 px-4 cursor-pointer hover:bg-blue-600 hover:rounded-full text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
