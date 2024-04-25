import Link from "next/link";
import { UrlObject } from "url";

export default function LinkButton({
  href,
  children,
  type,
  disabled,
  size = "normal",
}: {
  href: string | UrlObject;
  children: React.ReactNode;
  type: "basic" | "point" | "active";
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
