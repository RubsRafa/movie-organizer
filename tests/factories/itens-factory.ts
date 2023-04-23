import { faker } from "@faker-js/faker";
import prisma from "database/db";

export async function createItem() {
    return prisma.itens.create({
        data: {
            name: faker.music.songName(),
        },
    })
};

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

export async function createGenreItemRelation(id_item: number, id_genre: number) {
    return prisma.itens_genres.create({
        data: {
            id_item,
            id_genre
        },
    })
};

export async function createPlatformItemRelation(id_item: number, id_platform: number) {
    return prisma.itens_platforms.create({
        data: {
            id_item,
            id_platform,
        },
    })
};

export async function createStatusItemRelation(id_item: number, id_status: number) {
    return prisma.itens_status.create({
        data: {
            id_item,
            id_status,
        },
    })
};

export async function deleteItem(id: number) {
    return prisma.itens.delete({
        where: {
            id,
        },
    })
}