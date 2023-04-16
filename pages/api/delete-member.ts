import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { userId } = JSON.parse(req.body);
    if (userId) {
      const response = await prisma.member.delete({
        where: {
          memberId: userId,
        },
      });

      if (response) {
        res.status(200).send("Member deleted successfully");
      }
    } else {
      res.status(404).send("User id not in payload");
    }
  }
}
