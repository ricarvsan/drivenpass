import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';

const credentialsRouter = Router();

credentialsRouter
  .all('/*', authenticateToken)
  .get('/',)

export { credentialsRouter };