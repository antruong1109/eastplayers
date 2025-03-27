import Popup from "reactjs-popup";
import Button from "../form/Button";
import { IoMdClose } from "react-icons/io";
import InputField from "../form/InputField";
import { useForm } from "react-hook-form";

export const AddContactModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const valueEmail = getValues("email");
  const valuePhone = getValues("phoneNumber");
  const valueAdditionalPhone = getValues("additionalPhoneNumber");

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  });

  return (
    <Popup
      modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      contentStyle={{
        marginRight: 0,
        height: "100%",
      }}
    >
      <div className="w-100 bg-[#18181B] h-full p-6">
        <IoMdClose
          size={24}
          color="#7F859F"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            right: "24px",
            top: "24px",
            cursor: "pointer",
          }}
        />
        <p className="text-xl font-bold mb-4">Add Contact</p>
        <p className="text-sm mb-4">
          Please enter at least one field: email or phone number.
        </p>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <InputField
              label="Name"
              placeholder="Name"
              required
              register={{
                ...register("name", { required: true }),
              }}
              error={
                errors.name &&
                errors.name.type === "required" &&
                "This is required"
              }
            />
            <InputField
              label="Email"
              placeholder="Email"
              register={{
                ...register("email", { required: false }),
              }}
              error={
                valueEmail == "" &&
                valuePhone == "" &&
                valueAdditionalPhone == "" &&
                "Please enter at least one field: email or phone number."
              }
            />
            <InputField
              label="Phone Number"
              placeholder="Phone number"
              register={{
                ...register("phoneNumber", { required: false }),
              }}
              error={
                valueEmail == "" &&
                valuePhone == "" &&
                valueAdditionalPhone == "" &&
                "Please enter at least one field: email or phone number."
              }
            />
            <InputField
              label="Additional Phone Number"
              placeholder="Phone number"
              register={{
                ...register("additionalPhoneNumber", { required: false }),
              }}
              error={
                valueEmail == "" &&
                valuePhone == "" &&
                valueAdditionalPhone == "" &&
                "Please enter at least one field: email or phone number."
              }
            />
            <InputField
              label="Note"
              placeholder="Enter"
              register={{
                ...register("note", { required: false }),
              }}
            />
            <div className="flex justify-between items-center mt-4">
              <Button
                label="Cancel"
                variant="outlined"
                onClick={() => setIsOpen(false)}
              />
              <Button label="Save" onClick={() => onSubmit()} />
            </div>
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default AddContactModal;
