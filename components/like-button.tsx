import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function LikeButton({
  postId,
  userId,
}: {
  postId: number;
  userId: number;
}) {
  const { data, mutate } = useSWR(
    `/api/post/likes/read?postId=${postId}&userId=${userId}`
  );

  const [isLikedState, setIsLikedState] = useState(false);

  const handleLike = async () => {
    const response = await fetch("/api/post/likes/write", {
      method: "POST",
      body: JSON.stringify({ postId, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate(true, true);
    }
  };

  const handleUnlike = async () => {
    const response = await fetch("/api/post/likes/delete", {
      method: "DELETE",
      body: JSON.stringify({ postId, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate(false, true);
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      setIsLikedState(data.isLiked);
    }
  }, [data]);
  return (
    <button
      aria-label="like"
      onClick={isLikedState ? handleUnlike : handleLike}
    >
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`w-7 h-7 ${isLikedState ? "text-red-500" : "text-gray-500"}`}
      >
        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z"></path>
      </svg>
    </button>
  );
}
