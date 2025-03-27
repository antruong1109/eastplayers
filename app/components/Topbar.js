import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const Topbar = ({ label }) => {
  const router = useRouter();
  return (
    <div className="w-full h-15 bg-[#0F0F0F] border-b border-b-[#212226] flex items-center px-5 gap-3">
      <div
        onClick={() => router.back()}
        className="w-8 h-8 bg-[#212226] rounded-lg p-1 flex justify-center items-center cursor-pointer"
      >
        <IoArrowBack size={20} color="#858585" />
      </div>
      <p className="text-[16px] font-bold">{label}</p>
    </div>
  );
};

export default Topbar;
