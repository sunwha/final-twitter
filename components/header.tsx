import Link from "next/link";

export default function Header({
  back = false,
  mypage = false,
  user,
}: {
  back?: boolean;
  mypage?: boolean;
  user?: string;
}) {
  return (
    <header className="p-2 flex justify-center items-center top-0 mt-[-2rem]">
      {back && (
        <button
          className="absolute left-4"
          onClick={() => window.history.back()}
          aria-label="back"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            ></path>
          </svg>
        </button>
      )}
      {mypage && (
        <Link aria-label="my page" href={`/tweet/${user}`}>
          <span className="absolute left-4">
            <svg
              className="w-7 h-7"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
          </span>
        </Link>
      )}
      <h1
        className="text-3xl font-extrabold"
        style={{ textShadow: "4px 4px 0 rgba(37, 99, 235, 1)" }}
      >
        T
      </h1>
    </header>
  );
}
