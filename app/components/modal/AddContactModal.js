import Popup from "reactjs-popup";
import Button from "../form/Button";
import { IoMdClose } from "react-icons/io";
import InputField from "../form/InputField";

export const AddContactModal = ({ isOpen, setIsOpen }) => {
  return (
    <Popup
      modal
      open={isOpen}
      // open={true}
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
        <div className="flex flex-col gap-4">
          <InputField label="Name" placeholder="Name" required />
          <InputField label="Email" placeholder="Email" />
          <InputField label="Phone Number" placeholder="Phone number" />
          <InputField
            label="Additional Phone Number"
            placeholder="Phone number"
          />
          <InputField label="Note" placeholder="Enter" />
          <div className="flex justify-between items-center mt-4">
            <Button
              label="Cancel"
              variant="outlined"
              onClick={() => setIsOpen(false)}
            />
            <Button label="Save" />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default AddContactModal;
