import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/libs/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body.p);
  const data = await client
    .create({
      endpoint: "contact",
      content: req.body,
    })

    .then((res) => console.log(res.id));
  // console.log(req.body);
  res.status(200).json(data);
};
export default handler;
