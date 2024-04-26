import Header from "@components/header";
import Tweet from "@components/tweet";
import TweetList from "@components/tweetlist";
import useMutation from "lib/client/useMutation";
import useUser from "lib/client/useUser";
import Link from "next/link";
import { useEffect, useState } from "react";
import getTimeElapsedSince from "utils/getTimeElapsedSince";

/**
 * 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
 * 로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
 * 또한 트윗을 작성할 수 있어야 합니다.
 */

interface IPost {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
}
export default () => {
  const { user, isLoading } = useUser();
  const [read, { loading, data, error }] = useMutation("/api/post/read");
  const [listData, setListData] = useState([]);
  useEffect(() => {
    read();
  }, []);
  useEffect(() => {
    if (data?.ok && !loading) {
      const listData = data.postsWithUserNames;
      const sortedData = listData.sort((a: IPost, b: IPost) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setListData(sortedData);
    }
  }, [data]);
  return (
    !isLoading && (
      <>
        <Header mypage={true} user={user && user.name} />
        <TweetList>
          {listData.map((tweet: IPost) => (
            <Tweet
              mine={tweet.userName === user.name}
              like={false}
              key={tweet.id}
              name={tweet.userName}
              comment={tweet.content}
              date={getTimeElapsedSince(tweet.createdAt)}
            />
          ))}
        </TweetList>
        <Link href="/post" aria-label="post">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="fixed bottom-5 right-5 w-14 h-14 text-blue-600"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            ></path>
          </svg>
        </Link>
      </>
    )
  );
};
