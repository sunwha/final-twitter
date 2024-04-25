import { NextApiRequest, NextApiResponse } from "next";
import db from "lib/server/db";
import withHandler from "lib/server/withHandler";
import bcrypt from "bcrypt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { createName, createEmail, createPassword } = req.body;
  const isUser = await db.user.findUnique({
    where: { email: createEmail },
    select: { id: true },
  });
  if (isUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(createPassword, 12);
  const user = await db.user.create({
    data: {
      name: createName,
      email: createEmail,
      password: hashedPassword,
    },
  });
  return res.status(200).json({ ok: true });
}

export default withHandler({
  method: "POST",
  handler,
  isPrivate: false,
});
