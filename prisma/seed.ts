import prisma from "../src/database/db";

async function main() {
    await prisma.genres.createMany({
        data: [
            {
                "genre": "Action"
            },
            {
                "genre": "Animation"
            },
            {
                "genre": "Adventure"
            },
            {
                "genre": "Comedy"
            },
            {
                "genre": "Crime"
            },
            {
                "genre": "Documentary"
            },
            {
                "genre": "Drama"
            },
            {
                "genre": "Family"
            },
            {
                "genre": "Fantasy"
            },
            {
                "genre": "Science Fiction"
            },
            {
                "genre": "War"
            },
            {
                "genre": "Horror"
            },
            {
                "genre": "Mystery"
            },
            {
                "genre": "Musical"
            },
            {
                "genre": "Romance"
            },
            {
                "genre": "Thriller"
            },
            {
                "genre": "Horror"
            }
        ]
    })
}


main()
.then(() => {
    console.log('The registration has been successfully completed')
})
.catch((e) => {
    console.log(e);
    process.exit(1);
})
.finally( async () => {
    await prisma.$disconnect()
})