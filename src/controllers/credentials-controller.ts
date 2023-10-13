import { Request, Response } from 'express';
import httpStatus from 'http-status';


export async function getCredentials(req: Request, res: Response) {
  
  
  const result = await authenticationService.signIn({ email, password });

  return res.status(httpStatus.OK).send(result);
}

export async function createCredential(req: Request, res: Response) {

const result = await authenticationService.signIn({ email, password });

return res.status(httpStatus.OK).send(result);
}