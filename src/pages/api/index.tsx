import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ResponseData = {
  message: string;
  statusCode?: number;
}

type RequestBodyData = {
  requestedURL: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const { requestedURL }: RequestBodyData = req.body;

  if (!requestedURL || requestedURL == '') {
    res.status(400).json({ message: 'requestedURL param is required' });
  }

  try {
    const response = await axios.get(requestedURL);
    res.status(200).send({ statusCode: response.status, message: 'Good Job!' });
  } catch (error) {
    res.status(400).json({ message: 'error sending request' });
  }
}