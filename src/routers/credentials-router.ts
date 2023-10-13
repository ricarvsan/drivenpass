import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createCredential, deleteCredential, getCredentialData, getCredentials } from '@/controllers';
import { credentialSchema } from '@/schemas';

const credentialsRouter = Router();

credentialsRouter
  .all('/*', authenticateToken)
  .get('/', getCredentials)
  .get('/:credentialId', getCredentialData)
  .post('/', validateBody(credentialSchema),createCredential)
  .delete('/:credentialId', deleteCredential)

export { credentialsRouter };