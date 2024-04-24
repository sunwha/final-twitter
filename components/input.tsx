import { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import inputRules from "./input-rules";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  isDirty?: boolean | undefined;
  label: string;
  readOnly?: boolean;
}

export default function Input({
  name,
  label,
  register,
  required,
  errors,
  disabled,
  isDirty,
  readOnly,
  ...rest
}: IInputProps) {
  const disabledStyle =
    "text-white bg-gray-100 border-gray-100 cursor-not-allowed";
  const disabledLable = "text-gray-400";

  const errorMsg = errors[name] && errors[name].message;
  return (
    <>
      <div className="relative">
        <input
          {...rest}
          className={`peer w-full px-2 py-4 border-gray-300 rounded focus:pt-5 focus:outline-none focus:border-blue-600 border-2 transition duration-300 ease-in-out read-only:pt-5 ${
            disabled && disabledStyle
          } ${
            errorMsg &&
            "border-red-500 border-2 outline-none focus:border-red-500 focus:border-2 focus:outline-none"
          }`}
          {...register(name, inputRules(name, required))}
          readOnly={readOnly}
        />
        <label
          htmlFor={name}
          className={`absolute top-0 left-1 px-2 py-4 text-gray-500 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:top-[-10px] peer-focus:transition peer-focus:duration-300 peer-focus:ease-in-out peer-read-only:top-[-10px] peer-read-only:text-xs
           ${disabled && disabledLable}
           ${errorMsg && "text-red-500 peer-focus:text-red-500"}
           ${isDirty && "top-[-10px] text-xs"}
           ${!isDirty && "text-lg"}`}
        >
          {label}
        </label>
      </div>
      {errorMsg && (
        <p className="text-red-500 text-xs font-bold pt-2">{errorMsg}</p>
      )}
    </>
  );
}
