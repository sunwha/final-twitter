import withHandler, { ResponseType } from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "lib/server/db";
import withApiSession from "lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const allPosts = await db.post.findMany();
  const postsWithUserNames = await Promise.all(
    allPosts.map(async (post) => {
      const user = await db.user.findUnique({ where: { id: post.userId } });
      const userName = user?.name || "Unknown";
      return { ...post, userName };
    })
  );
  return res.status(200).json({ ok: true, postsWithUserNames });
}
export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
