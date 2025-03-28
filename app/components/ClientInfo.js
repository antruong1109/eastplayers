import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useCallback, useState } from "react";
import AddContactModal from "./modal/AddContactModal";
import ContactModal from "./modal/ContactModal";
import SelectBox from "./form/SelectBox";
import Button from "./form/Button";
import InputField from "./form/InputField";
import { nextStep } from "@/lib/features/appointment/createAppointmentSlice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { isEmpty } from "lodash";

export const ClientInfo = () => {
  const [valueContact, setValueContact] = useState([]);
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const [isManualVehicle, setIsManualVehicle] = useState(false);
  const [isErrorContact, setIsErrorContact] = useState(false);
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
    getValues,
  } = useForm({
    defaultValues: {
      contact: [],
      year: "",
      make: "",
      model: "",
      vehicleType: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    checkNextStep();
  });

  const onSubmitForm = () => {
    if (isEmpty(valueContact)) {
      setIsErrorContact(true);
    } else {
      setValue("contact", valueContact);
    }
    onSubmit();
  };

  const deleteContact = (itemId) => {
    setValueContact((prev) => prev.filter((item) => item.id !== itemId));
  };

  const renderContactInfo = useCallback(() => {
    if (!isEmpty(valueContact))
      return (
        <div className="flex items-start gap-8 mb-6">
          <p className="text-[#A4A8B7] text-xs font-bold">Client</p>
          <div className="flex flex-col gap-2">
            {valueContact.map((item) => {
              return (
                <div className="flex items-center text-sm gap-2" key={item.id}>
                  <p>{item.name}</p>
                  <p className="border-l border-r border-[#2F323E] px-2">
                    {item.email}
                  </p>
                  <p>{item.phone}</p>
                  <IoMdClose
                    className="cursor-pointer"
                    color="#FA1717"
                    size={20}
                    onClick={() => deleteContact(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    else
      return (
        <div className="mb-8">
          <div className="flex justify-between items-center gap-2 ">
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
          {isErrorContact && (
            <p className="text-[#F64D3C] text-sm mt-1">This is required</p>
          )}
        </div>
      );
  }, [valueContact, isErrorContact]);

  return (
    <div>
      <p className="text-[30px] font-bold mb-5">Client Information</p>
      <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-2">
              Contact <span className="text-[#F64D3C]">*</span>
            </p>
            {renderContactInfo()}
            <p className="text-sm font-bold mb-4">Vehicle Detail</p>
            {isManualVehicle ? (
              <div className="border border-[#2F323E] rounded-xl p-4 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <InputField
                      label="Year"
                      required
                      placeholder="Enter"
                      register={{
                        ...register("year", { required: true }),
                      }}
                      error={
                        errors.year &&
                        errors.year.type === "required" &&
                        "This is required"
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <InputField
                      label="Make"
                      required
                      placeholder="Enter"
                      register={{
                        ...register("make", { required: true }),
                      }}
                      error={
                        errors.make &&
                        errors.make.type === "required" &&
                        "This is required"
                      }
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <InputField
                    label="Model"
                    required
                    placeholder="Enter"
                    register={{
                      ...register("model", { required: true }),
                    }}
                    error={
                      errors.model &&
                      errors.model.type === "required" &&
                      "This is required"
                    }
                  />
                </div>
                <div className="flex-1">
                  <SelectBox
                    label="Vehicle Type"
                    required
                    register={{
                      ...register("vehicleType", { required: true }),
                    }}
                    error={
                      errors.vehicleType &&
                      errors.vehicleType.type === "required" &&
                      "This is required"
                    }
                    setValue={setValue}
                    name="vehicleType"
                  />
                </div>
              </div>
            ) : (
              <div className="border border-[#2F323E] rounded-xl p-4 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <SelectBox
                      label="Year"
                      required
                      register={{
                        ...register("year", { required: true }),
                      }}
                      error={
                        errors.year &&
                        errors.year.type === "required" &&
                        "This is required"
                      }
                      setValue={setValue}
                      name="year"
                    />
                  </div>
                  <div className="flex-1">
                    <SelectBox
                      label="Make"
                      required
                      register={{
                        ...register("make", { required: true }),
                      }}
                      error={
                        errors.make &&
                        errors.make.type === "required" &&
                        "This is required"
                      }
                      setValue={setValue}
                      name="make"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <SelectBox
                    label="Model"
                    required
                    register={{
                      ...register("model", { required: true }),
                    }}
                    error={
                      errors.model &&
                      errors.model.type === "required" &&
                      "This is required"
                    }
                    setValue={setValue}
                    name="model"
                  />
                </div>
                <div className="flex-1">
                  <SelectBox
                    label="Vehicle Type"
                    required
                    register={{
                      ...register("vehicleType", { required: true }),
                    }}
                    error={
                      errors.vehicleType &&
                      errors.vehicleType.type === "required" &&
                      "This is required"
                    }
                    setValue={setValue}
                    name="vehicleType"
                  />
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
              <Button label="Next" onClick={() => onSubmitForm()} />
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
        setValueContact={setValueContact}
        valueContact={valueContact}
      />
    </div>
  );
};

export default ClientInfo;
