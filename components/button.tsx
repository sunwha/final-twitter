export default function Button({
  children,
  styleType,
  disabled,
  size = "large",
}: {
  children: React.ReactNode;
  styleType: "basic" | "point" | "active";
  size?: "small" | "normal" | "large";
  disabled?: boolean;
}) {
  const colors = {
    basic: "text-blue-600 bg-white border-gray-300",
    point: "text-white bg-blue-600 border-blue-600",
    active: "text-white bg-black border-black",
  };
  const sizes = {
    small: "w-20 h-8 text-sm",
    normal: "h-10 text-sm",
    large: "w-full h-12",
  };
  const disabledStyle =
    "text-white bg-gray-400 border-gray-400 cursor-not-allowed";

  return (
    <button
      className={`font-bold rounded-full border ${sizes[size]} ${
        colors[styleType]
      } ${disabled && disabledStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
