import Image from "next/image";
import Button from "../form/Button";
import { RiDeleteBin7Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

export const ProfileCard = () => {
  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/vehicle.png"
              alt="vehicle"
              width={40}
              height={40}
              priority
            />
          </div>
          <div>
            <p className="font-bold text-2xl">Thomas Smith</p>
            <p className="text-xs font-bold text-[#2E7FF1]">View profile</p>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <Button
              label="Delete Appointment"
              variant="outlined-red"
              icon={<RiDeleteBin7Line />}
            />
            <Button
              label="Edit Appointment"
              variant="outlined"
              icon={<GoPencil />}
            />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-16 mb-4">
        <div>
          <p className="text-xs font-bold text-[#A4A8B7]">Start Date</p>
          <p className="text-sm">January 15, 2025 - 10:00 AM</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#A4A8B7]">End Date</p>
          <p className="text-sm">January 20, 2025 - 4:00 PM</p>
        </div>
        <div>
          <p className="text-[#7F859F] text-sm">ID {`{{no}}`}</p>
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

export default ProfileCard;
