export default function getTimeElapsedSince(dateString: string) {
  const pastDate: Date = new Date(dateString);
  const currentDate: Date = new Date();

  const timeDiffInMilliseconds = currentDate.getTime() - pastDate.getTime();
  const timeDiffInDays = Math.floor(
    timeDiffInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (timeDiffInDays < 1) {
    const timeDiffInHours = Math.floor(
      timeDiffInMilliseconds / (1000 * 60 * 60)
    );
    if (timeDiffInHours < 1) {
      const timeDiffInMinutes = Math.floor(
        timeDiffInMilliseconds / (1000 * 60)
      );
      return `${timeDiffInMinutes}분`;
    } else {
      return `${timeDiffInHours}시간`;
    }
  } else {
    return `${timeDiffInDays}일`;
  }
}
