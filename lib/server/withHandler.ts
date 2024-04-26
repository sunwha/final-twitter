import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: "GET" | "POST" | "DELETE";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  method,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    if (req.method !== method) {
      return res.status(405).json({ message: "Method not allowed" });
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Please log in" });
    }
    try {
      return await handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
