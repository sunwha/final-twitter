import withHandler from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "lib/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail } = req.body;
  const isUser = await db.user.findUnique({
    where: { email: userEmail },
    select: { id: true },
  });
  if (!isUser) {
    return res.status(400).json({ message: "User not found" });
  } else {
    return res.status(200).json({ ok: true, userEmail });
  }
}

export default withHandler({
  method: "POST",
  handler,
  isPrivate: false,
});
