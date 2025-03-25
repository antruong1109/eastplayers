import Button from "./form/Button";
export const Review = ({ setStep }) => {
  const checkNextStep = () => {
    setStep(1);
  };

  return (
    <div>
      <p className="text-[30px] font-bold mb-5">Review & Send</p>
      <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
        <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
          <form>
            <div className="flex flex-col">
              <div className="mr-0 ml-auto">
                <Button label="Next" onClick={() => checkNextStep()} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
