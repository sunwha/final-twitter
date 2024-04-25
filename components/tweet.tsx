export default function Tweet({
  name,
  comment,
  date,
}: {
  name: string;
  comment: string;
  date: string;
}) {
  return (
    <li className="mt-5 p-4 first:mt-0 text-sm rounded-lg border border-gray-300">
      <strong>{name}</strong>
      <p className="pt-1">{comment}</p>
      <span>{date}</span>
    </li>
  );
}
