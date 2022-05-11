import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, response: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }
    response.status(200).json(sampleUserData);
  } catch (error: any) {
    response.status(500).json({ statusCode: 500, message: error.message });
  }
};

export default handler;
