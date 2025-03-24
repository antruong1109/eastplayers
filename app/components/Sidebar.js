import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Sidebar = ({}) => {
  return (
    <div className="h-screen w-50 bg-[#0F0F0F] border-r border-r-[#212226] flex flex-col">
      <div className="p-4 h-15 border-b border-[#212226]">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={28}
          priority
          className="cursor-pointer"
        />
      </div>
      <div className="flex-1 border-b border-[#212226]"></div>
      <div className="h-15 p-4 relative">
        <div className="inline-flex items-center rounded-[14px] bg-[#2F323E] cursor-pointer">
          <div className="rounded-full bg-pink-200 flex justify-center items-center overflow-hidden w-7 h-7">
            <Image src="/logo.png" alt="logo" width={28} height={28} priority />
          </div>
          <div className="pl-2 pr-4 flex justify-between items-center">
            <p className="font-bold text-sm">An Truong</p>
          </div>
        </div>
        <div className="w-6 h-6 bg-[#212226] rounded-full absolute -top-3 right-3 p-[3px] cursor-pointer">
          <IoArrowBackCircleOutline size={18} color="#7F859F" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
