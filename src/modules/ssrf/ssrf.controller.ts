import { Request, Response } from 'express';
import axios from 'axios';

export const fetchUrl = async (req: Request, res: Response) => {
  const url = req.query.url as string;

  console.log("URL INPUT:",url);

  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};