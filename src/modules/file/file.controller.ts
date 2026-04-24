import { Request, Response } from 'express';
import path from 'path';

export const uploadFile = async (req: Request, res: Response) => {
    // console.log("File Request:", req)
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    filename: file.filename,
    path: file.path
  });
};

export const getFile = async (req: Request, res: Response) => {
  const filename = req.params.filename;

  const filePath = path.join(__dirname, '../../../uploads', filename);

  res.sendFile(filePath);
};