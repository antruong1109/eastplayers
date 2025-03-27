import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import AddContactModal from "./modal/AddContactModal";
import ContactModal from "./modal/ContactModal";
import SelectBox from "./form/SelectBox";
import Button from "./form/Button";
import InputField from "./form/InputField";
import { nextStep } from "@/lib/features/appointment/createAppointmentSlice";
import { useDispatch } from "react-redux";

export const ClientInfo = () => {
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const [isManualVehicle, setIsManualVehicle] = useState(false);
  const dispatch = useDispatch();

  const checkNextStep = () => {
    dispatch(nextStep());
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  });

  return (
    <div>
      <p className="text-[30px] font-bold mb-5">Client Information</p>
      <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-2">
              Contact <span className="text-[#F64D3C]">*</span>
            </p>
            <div className="flex justify-between items-center gap-2 mb-8">
              <div
                onClick={() => setIsOpenContactModal(true)}
                className="flex justify-between items-center flex-1 h-12 rounded-lg bg-[#2F323E] px-4 cursor-pointer"
              >
                <p className="text-[#7F859F]">Select</p>
                <IoIosArrowDown size={20} color="7F859F" />
              </div>
              <div
                onClick={() => setIsOpenAddContactModal(true)}
                className="h-12 w-12 border border-[#058CD7] flex justify-center items-center rounded-lg cursor-pointer"
              >
                <FiPlus size={20} color="#058CD7" />
              </div>
            </div>
            <p className="text-sm font-bold mb-4">Vehicle Detail</p>
            {isManualVehicle ? (
              <div className="border border-[#2F323E] rounded-xl p-4 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <InputField label="Year" required placeholder="Enter" />
                  </div>
                  <div className="flex-1">
                    <InputField label="Make" required placeholder="Enter" />
                  </div>
                </div>
                <div className="flex-1">
                  <InputField label="Model" required placeholder="Enter" />
                </div>
                <div className="flex-1">
                  <SelectBox label="Vehicle Type" required />
                </div>
              </div>
            ) : (
              <div className="border border-[#2F323E] rounded-xl p-4 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <SelectBox label="Year" required />
                  </div>
                  <div className="flex-1">
                    <SelectBox label="Make" required />
                  </div>
                </div>
                <div className="flex-1">
                  <SelectBox label="Model" required />
                </div>
                <div className="flex-1">
                  <SelectBox label="Vehicle Type" required />
                </div>
              </div>
            )}
            <p
              onClick={() => setIsManualVehicle(!isManualVehicle)}
              className="my-6 text-sm text-[#2E7FF1] cursor-pointer"
            >
              {isManualVehicle
                ? "I prefer to pick from the available Vehicle options."
                : `Can't find a vehicle? Enter it manually.`}
            </p>
            <div className="mr-0 ml-auto">
              <Button label="Next" onClick={() => checkNextStep()} />
            </div>
          </div>
        </form>
      </div>
      <AddContactModal
        isOpen={isOpenAddContactModal}
        setIsOpen={setIsOpenAddContactModal}
      />
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={setIsOpenContactModal}
        setAddContactModal={setIsOpenAddContactModal}
      />
    </div>
  );
};

export default ClientInfo;
