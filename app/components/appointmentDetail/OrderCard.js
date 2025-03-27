import Image from "next/image";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuPackage } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { BsDot } from "react-icons/bs";

export const OrderCard = () => {
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
          <div className="rounded-xl h-20 gap-2 bg-[#0F0F0F] flex flex-col justify-center px-4">
            <div className="flex justify-between items-center">
              <div className="text-[#7F859F] flex items-center gap-2">
                <LiaMoneyBillWaveSolid size={20} />
                <p>Total Cost</p>
              </div>
              <p className="font-bold">$1000</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#7F859F] flex items-center gap-2">
                <LiaMoneyBillWaveSolid size={20} />
                <p>Profit</p>
              </div>
              <p className="font-bold text-[#2E7FF1]">$700</p>
            </div>
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
      <div className="mb-4">
        <p className="text-xs font-bold text-[#7F859F] mb-1">
          Technician Assigned
        </p>
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/vehicle.png"
              alt="vehicle"
              width={24}
              height={24}
              priority
            />
          </div>
          <p>Will Son</p>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-8 border-b border-[#2F323E] pb-4">
        <div>
          <p className="text-xs font-bold text-[#7F859F] mb-1">Start time</p>
          <p>January 15, 2025 - 10:00 AM</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#7F859F] mb-1">End time</p>
          <p>January 15, 2025 - 10:00 AM</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#7F859F] font-bold text-xs">Labor cost</p>
        <p>$800</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#7F859F] font-bold text-xs">Product cost</p>
        <p>$200</p>
      </div>
      <div className="bg-[#0F0F0F] rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <LuPackage size={20} />
            <p className="font-bold">Product Used (3)</p>
          </div>
          <GoPlus size={24} color="#2E7FF1" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm border-b border-[#2F323E] pb-2">
            <div className="flex flex-col gap-1">
              <p>Product name</p>
              <div className="flex items-center gap-2 text-xs text-[#7F859F]">
                <p>100 Oz</p>
                <BsDot />
                <p>200 Milliliter</p>
              </div>
            </div>
            <p>$100</p>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-[#2F323E] pb-2">
            <div className="flex flex-col gap-1">
              <p>Product name</p>
              <div className="flex items-center gap-2 text-xs text-[#7F859F]">
                <p>100 Oz</p>
                <BsDot />
                <p>200 Milliliter</p>
              </div>
            </div>
            <p>$100</p>
          </div>
          <div className="flex justify-between items-center text-sm pb-2">
            <div className="flex flex-col gap-1">
              <p>Product name</p>
              <div className="flex items-center gap-2 text-xs text-[#7F859F]">
                <p>100 Oz</p>
                <BsDot />
                <p>200 Milliliter</p>
              </div>
            </div>
            <p>$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
