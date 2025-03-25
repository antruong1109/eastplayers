export const InputField = ({ label, required, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold mb-2">
        {label} {required && <span className="text-[#F64D3C]">*</span>}
      </label>
      <input
        type="text"
        className="h-12 rounded-lg bg-[#2F323E] px-4 text-sm border-none outline-none"
        placeholder={placeholder}
        // {...register("name", { required: "- Your name is required" })}
      />
    </div>
  );
};

export default InputField;
