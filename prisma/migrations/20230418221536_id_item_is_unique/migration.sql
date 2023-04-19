/*
  Warnings:

  - A unique constraint covering the columns `[id_item]` on the table `itens_genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_item]` on the table `itens_platforms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_item]` on the table `itens_status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "itens_genres_id_item_key" ON "itens_genres"("id_item");

-- CreateIndex
CREATE UNIQUE INDEX "itens_platforms_id_item_key" ON "itens_platforms"("id_item");

-- CreateIndex
CREATE UNIQUE INDEX "itens_status_id_item_key" ON "itens_status"("id_item");
