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
    <div>
      <p className="text-[30px] font-bold mb-5">Review & Send</p>
      <div className="flex flex-col gap-4">
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
