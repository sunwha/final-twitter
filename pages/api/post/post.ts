import withHandler from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content } = req.body;
  const post = await db.post.create({
    data: {
      content,
    },
  });
  return res.status(200).json({ ok: true });
}
export default withHandler({
  method: "POST",
  handler,
  isPrivate: true,
});
