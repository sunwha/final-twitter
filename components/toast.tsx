import { useEffect, useState } from "react";

export default function Toast({ message }: { message: string }) {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`fixed z-10 right-4 left-4 bottom-5 text-sm p-2 bg-black text-white rounded-full opacity-80 text-center ${
        showToast
          ? "opacity-70 transform  transition-opacity ease-in"
          : "opacity-0 transform transition-opacity ease-out"
      }`}
    >
      <span>{message}</span>
    </div>
  );
}
