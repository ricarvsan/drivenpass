import { prisma } from '@/config';
import { Credential } from '@prisma/client';

async function getCredentialsByUserId(userId: number) {
    return prisma.credential.findMany({
        where: { userId }
    })
}

async function getCredentialById(credentialId: number) {
    return prisma.credential.findUnique({
        where: { id: credentialId }
    })
}

async function createCredential(data: CredentialData) {
    return prisma.credential.create({
        data
    })
}

async function findCredentialByTitleAndUserId(userId: number, title: string) {
    return prisma.credential.findFirst({
        where: {
            userId,
            title
        }
    })
}

export type CredentialData = Omit<Credential, 'id'>
export type CredentialInfo = Omit<CredentialData, 'userId'>

export const credentialsRepository = {
    getCredentialsByUserId,
    getCredentialById,
    createCredential,
    findCredentialByTitleAndUserId
}