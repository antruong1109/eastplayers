import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const optionData = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
];

export const SelectBox = ({ label, required, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelect, setOptionSelect] = useState("");

  const onSelect = (option) => {
    setOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold mb-2">
        {label} {required && <span className="text-[#F64D3C]">*</span>}
      </label>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex text-sm justify-between items-center flex-1 h-12 rounded-lg bg-[#2F323E] px-4 cursor-pointer"
        >
          {optionSelect !== "" ? (
            <p>{optionSelect}</p>
          ) : (
            <p className="text-[#7F859F]">Select</p>
          )}

          <IoIosArrowDown size={20} color="7F859F" />
        </div>
        {isOpen && (
          <div className="absolute z-[1] top-14 left-0 w-full max-w-100 h-80 rounded-xl bg-[#18181B] border border-[#2F323E] p-4 overflow-hidden flex flex-col">
            <div className="relative mb-4 w-full">
              <input
                type="text"
                className="h-12 rounded-lg bg-[#2F323E] px-4 pl-12 text-sm border-none outline-none flex-1 w-full"
                placeholder="Search by name, phone number or email"
              />

              <FiSearch
                color="#7F859F"
                size={20}
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "16px",
                  zIndex: 1,
                }}
              />
            </div>
            <div className="overflow-hidden flex-1">
              <div className="overflow-auto h-full">
                {optionData.map((item) => {
                  return (
                    <div
                      key={item}
                      className="h-10 p-2 cursor-pointer hover:bg-[#2F323E]"
                      onClick={() => onSelect(item)}
                    >
                      <p className="text-sm">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
