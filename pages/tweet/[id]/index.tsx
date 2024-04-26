import Header from "@components/header";
import Tweet from "@components/tweet";
import TweetList from "@components/tweetlist";
import useMutation from "lib/client/useMutation";
import useUser from "lib/client/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";
import { formatDate } from "utils/formatDate";
import getTimeElapsedSince from "utils/getTimeElapsedSince";

/**
 * 사용자는 id에 해당하는 트윗의 내용과 좋아요 버튼을 볼 수 있어야 합니다.
 * 좋아요버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 하며
 * useSWR의 mutate를 사용하여 업데이트를 반영해야 합니다.
 */
interface IPost {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
}
export default () => {
  const [listData, setListData] = useState([]);
  const [logout, { data: outData, error: outError, loading: outLoading }] =
    useMutation("/api/user/out");
  const { user, isLoading } = useUser();
  const router = useRouter();
  const onLogout = async () => {
    await logout();
  };
  useEffect(() => {
    if (outData?.ok && !outLoading) {
      router.push("/enter");
    }
  }, [outData, outError, outLoading]);
  useEffect(() => {
    if (user) {
      const listData = user.posts;
      const sortedData = listData.sort((a: IPost, b: IPost) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setListData(sortedData);
    }
  }, []);
  return (
    !isLoading && (
      <>
        <Header back={true} />
        <div className="relative mt-24 pb-4 mx-[-1rem]">
          <strong className="pb-6 text-2xl font-extrabold tracking-widest">
            {capitalizeFirstLetter(user.name)}
          </strong>
          <button
            onClick={onLogout}
            className="absolute top-0 right-0 px-4 py-1 text-sm font-bold rounded-full border border-gray-300"
          >
            Logout
          </button>
          <p className="text-sm">{user.email}</p>
          <div className="pt-4 flex items-center text-xs text-gray-600">
            <svg
              className="w-4 h-4 inline-block mr-1"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              ></path>
            </svg>
            <span>Joined {formatDate(user.createdAt)}</span>
          </div>
          <p className="pt-4 text-xs">
            <strong>{listData.length}</strong> posts
          </p>
        </div>
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
      </>
    )
  );
};
