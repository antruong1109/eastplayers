import Image from "next/image";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

export const ServiceCard = () => {
  return (
    <div className="min-w-[430px] flex-1 rounded-lg bg-[#212226] p-4">
      <div className="flex gap-4 mb-2">
        <div>
          <Image
            src="/vehicle.png"
            alt="vehicle"
            width={64}
            height={64}
            priority
          />
        </div>
        <div className="flex-1">
          <p className="font-bold mb-2">Front 2 Windows</p>
          <div className="rounded-xl h-12 bg-[#0F0F0F] flex justify-between items-center px-2">
            <div className="text-[#7F859F] flex items-center gap-2">
              <LiaMoneyBillWaveSolid size={20} />
              <p>Total Cost</p>
            </div>
            <p className="font-bold">$1000</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <p className="text-xs font-bold text-[#7F859F] mb-1">Service</p>
          <p className="text-sm">Window Tinting</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-[#7F859F] mb-1">Option</p>
          <p className="text-sm">Carbon Film</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-[#7F859F] mb-1">
          Technician Assigned
        </p>
        <div className="rounded-lg bg-[#2F323E] px-2 h-10 inline-flex justify-center gap-4 items-center mb-4">
          <p className="text-sm text-[#A4A8B7] font-bold">Select</p>
          <IoIosArrowDown size={16} color="#2E7FF1" />
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-[#7F859F] mb-1">Start Date</p>
        <div className="rounded-lg bg-[#2F323E] px-2 h-10 inline-flex justify-center gap-4 items-center mb-4">
          <p className="text-sm text-[#A4A8B7] font-bold">Select</p>
          <IoIosArrowDown size={16} color="#2E7FF1" />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs font-bold text-[#7F859F] mb-1">Start time</p>
        <div className="flex gap-2 items-center">
          <div className="rounded-lg bg-[#2F323E] pl-2 pr-4 h-10 inline-flex justify-center gap-4 items-center">
            <p className="text-sm text-[#A4A8B7] font-bold">--</p>
          </div>
          <p className="text-sm">hours</p>

          <div className="rounded-lg bg-[#2F323E] pl-2 pr-4 h-10 inline-flex justify-center gap-4 items-center">
            <p className="text-sm text-[#A4A8B7] font-bold">--</p>
          </div>
          <p className="text-sm">mins</p>
        </div>
      </div>
      <div className="rounded-full bg-[#2F323E] px-4 h-10 inline-flex justify-center items-center">
        <p className="text-sm text-[#A4A8B7] font-bold">
          Estimated End Date{" "}
          <span className="font-normal text-white pl-4">--</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
