import db from "lib/server/db";
import withHandler, { ResponseType } from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { postId, userId } = req.body;

  const newLike = db.like.create({
    data: {
      postId: +postId,
      userId: +userId,
    },
  });

  await db.post.update({
    where: { id: +postId },
    data: { likes: { connect: { id: (await newLike).id } } },
  });
  return res.status(200).json({ ok: true });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
