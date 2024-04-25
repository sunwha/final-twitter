export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  const monthYear = date.toLocaleDateString("en-US", options);
  const [month, year] = monthYear.split(" ");
  return `${month}, ${year}`;
}
