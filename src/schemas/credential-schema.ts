import Joi from 'joi';
import { CredentialInfo } from '@/repositories';

export const credentialSchema = Joi.object<CredentialInfo>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});
