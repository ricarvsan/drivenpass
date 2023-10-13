import { forbiddenError, notFoundError } from "@/erros";
import { CredentialData, credentialsRepository } from "@/repositories";
import { exclude } from "@/utils/prisma-utils";
import Cryptr from "cryptr";

const cryptr = new Cryptr('myTotallySecretKey')


async function getCredentialsByUserId(userId: number) {
    const credentials = await credentialsRepository.getCredentialsByUserId(userId);
    if(!credentials) throw notFoundError();

    const allCredentials = credentials.map(obj => ({...obj, password: cryptr.decrypt(obj.password)}))   

    return allCredentials;
}

async function getCredentialsById(userId: number, credentialId: number) {
    const credential = await credentialsRepository.getCredentialById(credentialId);
    if(!credential) throw notFoundError();
    if(credential.userId !== userId) throw forbiddenError('Credential does not belong to the user!');

    credential.password = cryptr.decrypt(credential.password);

    return {...exclude(credential, 'id', 'userId')}
}

async function createCredential(credentialData: CredentialData) {
    const credential = await credentialsRepository.findCredentialByTitleAndUserId(credentialData.userId, credentialData.title);
    if(credential) throw forbiddenError('User already have a credential with this title!')

    const encryptedPassword = cryptr.encrypt(credentialData.password);

    const createdCredential = credentialsRepository.createCredential({...credentialData, password: encryptedPassword})

    return createdCredential;
}



export const credentialsServices = {
    getCredentialsByUserId,
    getCredentialsById,
    createCredential
}