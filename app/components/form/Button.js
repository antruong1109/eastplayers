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
      })}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <p
        className={clsx({
          "text-sm font-bold": true,
          "": variant === "primary",
          "text-[#2E7FF1]": variant === "outlined",
        })}
      >
        {label}
      </p>
    </div>
  );
};

export default Button;
