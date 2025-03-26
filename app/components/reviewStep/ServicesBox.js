import { GoPencil } from "react-icons/go";
import Button from "../form/Button";

export const ServicesBox = ({ checkNextStep, checkPrevStep }) => {
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
      <div className="flex flex-col">
        <div className="mr-0 ml-auto">
          <Button label="Next" onClick={() => checkNextStep()} />
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
