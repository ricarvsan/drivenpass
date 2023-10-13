import { notFoundError } from "@/erros";
import { credentialsRepository } from "@/repositories";
import { exclude } from "@/utils/prisma-utils";


async function getCredentialsByUserId(userId: number) {
    const credentials = await credentialsRepository.getCredentialsByUserId(userId);
    if(!credentials) throw notFoundError();

    return credentials;
}