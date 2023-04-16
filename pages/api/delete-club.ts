import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { clubId } = JSON.parse(req.body);
    if (clubId) {
      const response = await prisma.club.delete({
        where: {
          id: clubId,
        },
      });

      if (response) {
        res.status(200).send("Club deleted successfully");
      }
    } else {
      res.status(404).send("Club id not in payload");
    }
  }
}
