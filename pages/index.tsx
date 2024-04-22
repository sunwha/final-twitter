import Header from "@components/header";
import Tweet from "@components/tweet";
import TweetList from "@components/tweetlist";

/**
 * 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
 * 로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
 * 또한 트윗을 작성할 수 있어야 합니다.
 */
export default () => {
  const data = [
    {
      username: "Wall street boy",
      comment:
        "What would you say is the biggest problem facing our country right now?",
    },
    {
      username: "Wall street boy",
      comment:
        "What would you say is the biggest problem facing our country right now?",
    },
  ];
  return (
    <>
      <Header mypage={true} />
      <TweetList>
        {data.map((tweet, index) => (
          <Tweet
            key={index + tweet.username}
            name={tweet.username}
            comment={tweet.comment}
          />
        ))}
      </TweetList>
    </>
  );
};
