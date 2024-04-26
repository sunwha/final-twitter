export default function Tweet({
  name,
  comment,
  date,
  mine,
  like,
}: {
  name: string;
  comment: string;
  date: string;
  mine: boolean;
  like: boolean;
}) {
  return (
    <li className="relative mt-5 p-4 first:mt-0 text-sm rounded-lg border border-gray-300">
      <strong>{name}</strong>
      <p className="pt-1">{comment}</p>
      <span className="block text-right text-xs mt-1">{date}</span>
      <div className="absolute flex items-center top-3 right-3">
        {mine && (
          <button aria-label="delete">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 text-gray-500 mr-1 mb-1"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
              ></path>
            </svg>
          </button>
        )}
        <button aria-label="like">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`w-7 h-7 ${like ? "text-red-500" : "text-gray-500"}`}
          >
            <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
}
