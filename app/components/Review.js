import AppointmentSchedule from "./reviewStep/AppointmentSchedule";
import ServicesBox from "./reviewStep/ServicesBox";
import ClientInfoBox from "./reviewStep/ClientInfoBox";

export const Review = ({ setStep }) => {
  const checkNextStep = () => {
    setStep(1);
  };

  const checkPrevStep = () => {
    setStep(2);
  };

  return (
    <div>
      <p className="text-[30px] font-bold mb-5">Review & Send</p>
      <div className="flex flex-col gap-4">
        <ClientInfoBox />
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
