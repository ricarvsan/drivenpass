import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createCredential, getCredentialData, getCredentials } from '@/controllers';
import { credentialSchema } from '@/schemas';

const credentialsRouter = Router();

credentialsRouter
  .all('/*', authenticateToken)
  .get('/', getCredentials)
  .get('/:credentialId', getCredentialData)
  .post('/', validateBody(credentialSchema),createCredential)

export { credentialsRouter };