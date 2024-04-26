import withHandler, { ResponseType } from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "lib/server/db";
import withApiSession from "lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { content },
    session: { user },
  } = req;

  const post = await db.post.create({
    data: {
      content,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  return res.status(200).json({ ok: true, post });
}
export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
