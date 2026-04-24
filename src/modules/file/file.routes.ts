import { Router } from 'express';
import multer from 'multer';
import { uploadFile, getFile } from './file.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // ❌ dangerous
  }
});

const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/:filename', getFile);

export default router;