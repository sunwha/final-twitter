import withHandler from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import withApiSession from "lib/server/withSession";
import db from "lib/server/db";

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
  const ok = await bcrypt.compare(userPassword, isUser.password);
  if (!ok) {
    return res.status(400).json({ ok: false, message: "User not found" });
  } else {
    req.session.user = {
      id: isUser.id,
    };
    console.log(req.session);
    await req.session.save();
    return res.status(200).json({ ok: true });
  }
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
    isPrivate: false,
  })
);
