import { prisma } from '@/config';

async function getCredentialsByUserId(userId: number) {
    return prisma.credential.findMany({
        where: {id: userId}
    })
}

export const credentialsRepository = {
    getCredentialsByUserId
}