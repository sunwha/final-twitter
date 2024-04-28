import db from "lib/server/db";
import withHandler, { ResponseType } from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { postId, userId } = req.body;

  if (!postId || !userId) {
    return res.status(400).json({ ok: false, message: "id is required" });
  }

  const post = await db.post.findUnique({
    where: { id: +postId },
    include: { likes: true }, // 게시물과 관련된 좋아요도 함께 가져옵니다.
  });

  if (!post) {
    return res.status(404).json({ ok: false });
  }

  const like = post.likes.find((like) => like.userId === userId);
  if (!like) {
    return res.status(400).json({ ok: false });
  }

  await db.like.delete({
    where: { id: like.id },
  });
  return res.status(200).json({ ok: true });
}

export default withApiSession(
  withHandler({
    method: "DELETE",
    handler,
    isPrivate: true,
  })
);
