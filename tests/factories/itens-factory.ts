import { faker } from "@faker-js/faker";
import prisma from "database/db";

export async function createGenre() {
    return prisma.genres.create({
        data: {
            genre: faker.music.genre(),
        },
    })
};

export async function createPlatform() {
    return prisma.platforms.create({
        data: {
            name: faker.company.name(),
        },
    })
};

export async function createStatus(status: string) {
    return prisma.status.create({
        data: {
            status,
        },
    })
};
