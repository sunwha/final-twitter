import DelButton from "./del-button";
import LikeButton from "./like-button";

export default function Tweet({
  postId,
  name,
  comment,
  date,
  mine,
  userId,
}: {
  postId: number;
  name?: string;
  comment: string;
  date: string;
  mine: boolean;
  userId: number;
}) {
  return (
    <li className="relative mt-5 p-4 first:mt-0 text-sm rounded-lg border border-gray-300">
      {name && <strong>{name}</strong>}
      <p className="pt-1 first:pr-12">{comment}</p>
      <span className="block text-right text-xs mt-1">{date}</span>
      <div className="absolute flex items-center top-3 right-3">
        {mine && <DelButton postId={postId} />}
        <LikeButton postId={postId} userId={userId} />
      </div>
    </li>
  );
}
