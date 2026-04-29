import { Router } from 'express';
import { fetchUrl } from './ssrf.controller';

const router = Router();

router.get('/', fetchUrl); // ❌ no auth

export default router;