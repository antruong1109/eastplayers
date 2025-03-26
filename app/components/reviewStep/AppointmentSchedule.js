import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

export const AppointmentSchedule = () => {
  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold">Appointment Schedule</p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold">Select A Date</p>
          <div className="flex items-center gap-1">
            <CiCalendar />
            <p className="text-sm">Jan 2024</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
