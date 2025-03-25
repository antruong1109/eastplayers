import { FaCheck } from "react-icons/fa6";

const stepCreate = [
  {
    id: 1,
    title: "Client information",
    status: "complete",
  },
  {
    id: 2,
    title: "Service",
    status: "doing",
  },
  {
    id: 3,
    title: "Review & Send",
    status: "waiting",
  },
];

export const StepBox = () => {
  const renderCheckBoxStep = (status) => {
    switch (status) {
      case "complete":
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border bg-[#2E7FF1] flex justify-center items-center">
            <FaCheck size={18} />
          </div>
        );
      case "doing":
        return (
          <div className="w-8 h-8 rounded-full border-[#2E7FF1] border-[4px] bg-[#18181B] flex justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-[#2E7FF1]"></div>
          </div>
        );
      case "waiting":
        return (
          <div className="w-8 h-8 rounded-full border-white border bg-[#18181B]"></div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full border-white border bg-[#18181B]"></div>
        );
    }
  };

  return (
    <div className="w-[260px] h-[260px] rounded-xl p-6 bg-[#18181B] flex flex-col gap-6 relative">
      {stepCreate.map((item) => {
        return (
          <div key={item.id} className="flex gap-6 h-[50px] relative z-[1]">
            {renderCheckBoxStep(item.status)}
            <div className="flex-1">
              <p className="text-sm text-[#7F859F]">Step {item.id}</p>
              <p className="font-bold">{item.title}</p>
            </div>
          </div>
        );
      })}
      <div className="w-[1px] h-[150px] bg-white absolute left-10 top-10"></div>
    </div>
  );
};

export default StepBox;
