import { FaCheck } from "react-icons/fa6";

export const StepBox = ({ step }) => {
  const renderCheckBoxStepClientInfo = (status) => {
    switch (status) {
      case 1:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border-[4px] bg-[#18181B] flex justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-[#2E7FF1]"></div>
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border bg-[#2E7FF1] flex justify-center items-center">
            <FaCheck size={18} />
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border bg-[#2E7FF1] flex justify-center items-center">
            <FaCheck size={18} />
          </div>
        );
      default:
        return null;
    }
  };

  const renderCheckBoxStepServices = (status) => {
    switch (status) {
      case 1:
        return (
          <div className="w-8 h-8 rounded-full border-white border bg-[#18181B]"></div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border-[4px] bg-[#18181B] flex justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-[#2E7FF1]"></div>
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border bg-[#2E7FF1] flex justify-center items-center">
            <FaCheck size={18} />
          </div>
        );
      default:
        return null;
    }
  };

  const renderCheckBoxStepReview = (status) => {
    switch (status) {
      case 1:
        return (
          <div className="w-8 h-8 rounded-full border-white border bg-[#18181B]"></div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full border-white border bg-[#18181B]"></div>
        );
      case 3:
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border-[4px] bg-[#18181B] flex justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-[#2E7FF1]"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[260px] h-[260px] rounded-xl p-6 bg-[#18181B] flex flex-col gap-6 relative mt-[65px]">
      <div className="flex gap-6 h-[50px] relative z-[1]">
        {renderCheckBoxStepClientInfo(step)}
        <div className="flex-1">
          <p className="text-sm text-[#7F859F]">Step 1</p>
          <p className="font-bold">Client information</p>
        </div>
      </div>
      <div className="flex gap-6 h-[50px] relative z-[1]">
        {renderCheckBoxStepServices(step)}
        <div className="flex-1">
          <p className="text-sm text-[#7F859F]">Step 2</p>
          <p className="font-bold">Service</p>
        </div>
      </div>
      <div className="flex gap-6 h-[50px] relative z-[1]">
        {renderCheckBoxStepReview(step)}
        <div className="flex-1">
          <p className="text-sm text-[#7F859F]">Step 3</p>
          <p className="font-bold">Review & Send</p>
        </div>
      </div>
      <div className="w-[1px] h-[150px] bg-white absolute left-10 top-10"></div>
    </div>
  );
};

export default StepBox;
