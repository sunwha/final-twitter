import db from "lib/server/db";
import withHandler from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId, userId } = req.query;
  if (!postId || !userId) {
    return res.status(400).json({ ok: false, message: "id is required" });
  }
  const like = await db.like.findUnique({
    where: {
      postId_userId: {
        postId: +postId,
        userId: +userId,
      },
    },
  });
  const isLiked = !!like;
  res.status(200).json({ isLiked });
}
export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  })
);
