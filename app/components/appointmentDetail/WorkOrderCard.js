import { GoPencil } from "react-icons/go";
import OrderCard from "./OrderCard";

export const WorkOrderCard = () => {
  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative flex-1">
      <div className="flex justify-between items-center h-12">
        <p className="text-xl font-bold">Work Order (2)</p>
      </div>
      <div className="border border-[#2E7FF1] rounded-xl bg-[#0F0F0F] p-4 flex flex-col gap-2 my-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-[#7F859F] items-center">
            <GoPencil />
            <p>Grand Total</p>
          </div>
          <p className="font-bold">$2000</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-[#7F859F] items-center">
            <GoPencil />
            <p>Total Profit</p>
          </div>
          <p className="font-bold text-[#2E7FF1]">$400</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default WorkOrderCard;
