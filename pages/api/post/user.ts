import withHandler, { ResponseType } from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "lib/server/db";
import withApiSession from "lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;
  const userPost = await db.post.findOne({ where: { id: user.id } });

  return res.status(200).json({ ok: true, userPost });
}
export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: true,
  })
);
