import { GoPencil } from "react-icons/go";
import Button from "../form/Button";
import ServiceCard from "./ServiceCard";
import { useRouter } from "next/navigation";

export const ServicesBox = ({ checkNextStep, checkPrevStep }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/detail");
  };
  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold">Services</p>
        <p
          onClick={() => checkPrevStep()}
          className="cursor-pointer text-sm font-bold text-[#2E7FF1] inline-flex"
        >
          Edit <GoPencil size={16} className="ml-1 mt-[2px]" />
        </p>
      </div>
      <div className="flex flex-wrap gap-6 mb-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex flex-col">
        <div className="mr-0 ml-auto">
          <Button label="Send appointment" onClick={() => handleNavigate()} />
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
