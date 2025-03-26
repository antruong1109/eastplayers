import { GoPencil } from "react-icons/go";

export const ClientInfoBox = () => {
  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold">Client information</p>
        <p
          onClick={() => checkPrevStep()}
          className="cursor-pointer text-sm font-bold text-[#2E7FF1] inline-flex"
        >
          Edit <GoPencil size={16} className="ml-1 mt-[2px]" />
        </p>
      </div>
      <div className="flex items-center gap-8 mb-4">
        <p className="text-xs font-bold text-[#A4A8B7]">Client</p>
        <div className="flex gap-4 text-sm">
          <p>Thomas Smith</p>
          <p className="border-l border-r border-[#2F323E] px-4">
            abc@gmail.com
          </p>
          <p>(+1) 561-555-7689</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-xs font-bold text-[#A4A8B7]">
          Vehicle <br /> Details
        </p>
        <div className="flex gap-4 text-sm">
          <div className="flex justify-center items-center h-10 px-4 border border-[#2F323E] rounded-full bg-[#212226]">
            <p className="text-sm text-[#7F859F]">
              Year <span className="pl-2 text-white">2020</span>
            </p>
          </div>
          <div className="flex justify-center items-center h-10 px-4 border border-[#2F323E] rounded-full bg-[#212226]">
            <p className="text-sm text-[#7F859F]">
              Make <span className="pl-2 text-white">Toyota</span>
            </p>
          </div>
          <div className="flex justify-center items-center h-10 px-4 border border-[#2F323E] rounded-full bg-[#212226]">
            <p className="text-sm text-[#7F859F]">
              Modal <span className="pl-2 text-white">Corolla</span>
            </p>
          </div>
          <div className="flex justify-center items-center h-10 px-4 border border-[#2F323E] rounded-full bg-[#212226]">
            <p className="text-sm text-[#7F859F]">
              Vehicle Type <span className="pl-2 text-white">Sedan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoBox;
