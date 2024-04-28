import db from "lib/server/db";
import withHandler, { ResponseType } from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { postId } = req.query;
  if (!postId) {
    return res.status(400).json({ ok: false, message: "id is required" });
  }

  db.post.delete({
    where: {
      id: +postId,
    },
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
