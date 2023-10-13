import { AuthenticatedRequest } from '@/middlewares';
import { credentialsServices } from '@/services';
import { Response } from 'express';
import httpStatus from 'http-status';


export async function getCredentials(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const result = await credentialsServices.getCredentialsByUserId(userId);

  return res.status(httpStatus.OK).send(result);
}

export async function getCredentialData(req: AuthenticatedRequest, res: Response) {
  const credentialId = Number(req.params.credentialId);
  const { userId } = req;

  const result = await credentialsServices.getCredentialsById(userId, credentialId);

  return res.status(httpStatus.OK).send(result);
}

export async function createCredential(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { title, url, username, password } = req.body;

  const result = await credentialsServices.createCredential({title, url, username, password, userId})

  return res.status(httpStatus.OK).send(result);
}

export async function deleteCredential(req: AuthenticatedRequest, res: Response) {
  const credentialId = Number(req.params.credentialId);
  const { userId } = req;

  const result = await credentialsServices.deleteCredentialById(userId, credentialId)

  return res.status(httpStatus.OK).send(result);
}