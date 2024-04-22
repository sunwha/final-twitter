export default function Tweet({
  name,
  comment,
}: {
  name: string;
  comment: string;
}) {
  return (
    <li className="mt-5 p-4 first:mt-0 text-sm rounded-lg border border-gray-300">
      <strong>{name}</strong>
      <p className="pt-1">{comment}</p>
    </li>
  );
}
