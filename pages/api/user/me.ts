import db from "lib/server/db";
import withHandler, { ResponseType } from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await db.user.findUnique({
    where: { id: req.session.user.id },
    select: {
      name: true,
      email: true,
      createdAt: true,
      posts: true,
    },
  });
  res.status(200).json({ ok: true, profile });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
  })
);
