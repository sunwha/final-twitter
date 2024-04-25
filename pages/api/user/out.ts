import withHandler from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import withApiSession from "lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  await req.session.save();

  return res.status(200).json({ ok: true });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
  })
);
