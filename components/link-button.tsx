import Link from "next/link";

export default function LinkButton({
  href,
  children,
  type,
  disabled,
  size = "normal",
}: {
  href: string;
  children: React.ReactNode;
  type: "basic" | "point" | "active";
  size?: "normal" | "large";
  disabled?: boolean;
}) {
  const colors = {
    basic: "text-blue-600 bg-white border-gray-300",
    point: "text-white bg-blue-600 border-blue-600",
    active: "text-white bg-black border-black",
  };
  const sizes = {
    normal: "h-10 text-sm",
    large: "h-12",
  };
  const disabledStyle =
    "text-white bg-gray-400 border-gray-400 cursor-not-allowed";

  return (
    <Link href={href}>
      <span
        className={`flex items-center justify-center text-center font-bold rounded-full border ${
          sizes[size]
        } ${colors[type]} ${disabled && disabledStyle}`}
      >
        {children}
      </span>
    </Link>
  );
}
