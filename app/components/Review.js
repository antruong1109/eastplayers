import AppointmentSchedule from "./reviewStep/AppointmentSchedule";
import ServicesBox from "./reviewStep/ServicesBox";
import ClientInfoBox from "./reviewStep/ClientInfoBox";
import { prevStep } from "@/lib/features/appointment/createAppointmentSlice";
import { useDispatch } from "react-redux";

export const Review = () => {
  const dispatch = useDispatch();
  const checkNextStep = () => {
    // setStep(1);
  };

  const checkPrevStep = () => {
    dispatch(prevStep());
  };

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <p className="text-[30px] font-bold mb-5">Review & Send</p>
      <div className="flex-1 flex flex-col gap-4 overflow-auto">
        <ClientInfoBox checkPrevStep={checkPrevStep} />
        <AppointmentSchedule />
        <ServicesBox
          checkNextStep={checkNextStep}
          checkPrevStep={checkPrevStep}
        />
      </div>
    </div>
  );
};

export default Review;
