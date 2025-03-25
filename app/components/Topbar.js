import { IoArrowBack } from "react-icons/io5";

export const Topbar = ({}) => {
  return (
    <div className="w-full h-15 bg-[#0F0F0F] border-b border-b-[#212226] flex items-center px-5 gap-3">
      <div className="w-8 h-8 bg-[#212226] rounded-lg p-1 flex justify-center items-center cursor-pointer">
        <IoArrowBack size={20} color="#858585" />
      </div>
      <p className="text-[16px] font-bold">Create appointment</p>
    </div>
  );
};

export default Topbar;
