import bcrypt from "bcrypt";
import db from "lib/server/db";
import withHandler from "lib/server/withHandler";
import withApiSession from "lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail, userPassword } = req.body;
  const isUser = await db.user.findFirst({
    where: {
      email: userEmail,
    },
    select: {
      id: true,
      password: true,
    },
  });
  if (isUser) {
    const ok = await bcrypt.compare(userPassword, isUser.password);
    if (!ok) {
      return res.status(400).json({ ok: false, message: "Invalid password" });
    } else {
      req.session.user = {
        id: isUser.id,
      };
      await req.session.save();
      return res.status(200).json({ ok: true });
    }
  }
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: false,
  })
);
