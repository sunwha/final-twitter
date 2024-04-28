import { useRouter } from "next/router";

export default function DelButton({ postId }: { postId: number }) {
  const router = useRouter();

  const onDelete = () => {
    fetch(`/api/post/delete?id=${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete post");
        }
        router.reload();
        console.log("Post deleted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <button aria-label="delete" onClick={onDelete} className="mt-1">
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 mr-1 mb-1"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
        ></path>
      </svg>
    </button>
  );
}
