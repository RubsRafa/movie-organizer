-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_genres" (
    "id" SERIAL NOT NULL,
    "id_item" INTEGER NOT NULL,
    "id_genre" INTEGER NOT NULL,

    CONSTRAINT "itens_genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_platforms" (
    "id" SERIAL NOT NULL,
    "id_item" INTEGER NOT NULL,
    "id_platform" INTEGER NOT NULL,

    CONSTRAINT "itens_platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_status" (
    "id" SERIAL NOT NULL,
    "id_item" INTEGER NOT NULL,
    "id_status" INTEGER NOT NULL,

    CONSTRAINT "itens_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "itens_name_key" ON "itens"("name");

-- AddForeignKey
ALTER TABLE "itens_genres" ADD CONSTRAINT "fk_id_genre" FOREIGN KEY ("id_genre") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens_genres" ADD CONSTRAINT "fk_id_item" FOREIGN KEY ("id_item") REFERENCES "itens"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens_platforms" ADD CONSTRAINT "fk_id_item" FOREIGN KEY ("id_item") REFERENCES "itens"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens_platforms" ADD CONSTRAINT "fk_id_platform" FOREIGN KEY ("id_platform") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens_status" ADD CONSTRAINT "fk_id_genre" FOREIGN KEY ("id_status") REFERENCES "status"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens_status" ADD CONSTRAINT "fk_id_item" FOREIGN KEY ("id_item") REFERENCES "itens"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
