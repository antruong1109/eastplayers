import clsx from "clsx";

export const Button = ({
  label = "Button",
  variant = "primary",
  icon,
  onClick,
}) => {
  return (
    <div
      className={clsx({
        "flex justify-center items-center h-12 rounded-lg border px-4 border-[#2E7FF1] cursor-pointer": true,
        "bg-[#2E7FF1]": variant === "primary",
        "": variant === "outlined",
        "!border-[#FA1717]": variant === "outlined-red",
        "!border-[#7F859F]": variant === "filter-white",
        "!border-[#2E7FF1], !bg-[#00285F]": variant === "filter-active",
      })}
      onClick={onClick}
    >
      {icon && (
        <span
          className={clsx({
            "pr-2": true,
            "text-[#FA1717]": variant === "outlined-red",
            "text-[#2E7FF1]": variant === "outlined",
          })}
        >
          {icon}
        </span>
      )}
      <p
        className={clsx({
          "text-sm": true,
          "font-bold": variant === "primary",
          "text-[#2E7FF1] font-bold": variant === "outlined",
          "text-[#FA1717]": variant === "outlined-red",
        })}
      >
        {label}
      </p>
    </div>
  );
};

export default Button;
