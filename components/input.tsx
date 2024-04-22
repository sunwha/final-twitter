import { InputHTMLAttributes } from "react";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

export default function Input({
  disabled,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const disabledStyle =
    "text-white bg-gray-100 border-gray-100 cursor-not-allowed";
  const disabledLable = "text-gray-400";
  return (
    <div className="relative">
      <input
        {...rest}
        className={`peer w-full px-2 py-4 border-gray-300 rounded focus:pt-5 focus:outline-none focus:border-blue-600 border-2 transition duration-300 ease-in-out ${
          disabled && disabledStyle
        }`}
      />
      <label
        htmlFor={rest.name}
        className={`absolute top-0 left-1 px-2 py-4 text-lg text-gray-500 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:top-[-10px] peer-focus:transition peer-focus:duration-300 peer-focus:ease-in-out ${
          disabled && disabledLable
        }`}
      >
        {capitalizeFirstLetter(rest.name!)}
      </label>
    </div>
  );
}
