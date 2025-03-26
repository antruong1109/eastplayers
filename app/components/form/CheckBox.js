import { IoMdCheckmark } from "react-icons/io";

export const CheckBox = ({ isCheck = false, onChange }) => {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="hidden peer"
        checked={isCheck}
        onChange={() => onChange()}
      />
      <div
        className="w-5 h-5 border-2 border-[#7F859F] rounded-sm flex items-center justify-center transition-all duration-300 ease-in-out 
    peer-checked:bg-[#2E7FF1] peer-checked:border-[#2E7FF1]"
      >
        <IoMdCheckmark
          className={isCheck ? "text-white" : "text-transparent"}
          size={12}
        />
      </div>
    </label>
  );
};

export default CheckBox;
