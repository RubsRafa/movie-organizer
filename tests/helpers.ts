import prisma from "database/db";

export async function cleanDb() {
    await prisma.itens_genres.deleteMany({});
    await prisma.itens_platforms.deleteMany({});
    await prisma.itens_status.deleteMany({});
    await prisma.genres.deleteMany({});
    await prisma.platforms.deleteMany({});
    await prisma.status.deleteMany({});
    await prisma.itens.deleteMany({});
}

