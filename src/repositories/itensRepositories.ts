import { db } from "../config/db.js";
import { AddItemType } from "../protocols/itensProtocols.js";

async function listAllItens() {
  return await db.query(`
    SELECT i.id, i.name, g.genre, p.name AS platform, s.status 
    FROM itens i 
    JOIN (SELECT ig.id_item AS product, ig.id_genre, ip.id_platform, it.id_status 
        FROM itens_genres ig 
        JOIN itens_platforms ip 
          ON ip.id_item = ig.id_item 
        JOIN itens_status it 
          ON it.id_item = ig.id_item) AS item_info 
      ON item_info.product = i.id 
    JOIN genres g 
      ON g.id = item_info.id_genre 
    JOIN platforms p 
      ON p.id = item_info.id_platform 
    JOIN status s 
      ON s.id = item_info.id_status;
    `)
}

async function postItem({ name }: AddItemType) {
  console.log(name)
  return await db.query('INSERT INTO itens (name) VALUES ($1);', [name]);
}

async function findItemByName({ name }: AddItemType) {
  return await db.query('SELECT * FROM itens WHERE name = $1;', [name])
}

async function addItemInfo({ id, genre, platform, status }: AddItemType) {
  await db.query(`INSERT INTO itens_genres (id_item, id_genre) VALUES ($1, $2);`, [id, genre]);
  await db.query(`INSERT INTO itens_platforms (id_item, id_platform) VALUES ($1, $2);`, [id, platform]);
  await db.query(`INSERT INTO itens_status (id_item, id_status) VALUES ($1, $2);`, [id, status]);
  return;
}

async function findItem({ id }: AddItemType) {
  return db.query(`SELECT i.id, i.name, g.genre, p.name AS platform, s.status FROM itens i JOIN (SELECT ig.id_item AS product, ig.id_genre, ip.id_platform, it.id_status FROM itens_genres ig JOIN itens_platforms ip ON ip.id_item = ig.id_item JOIN itens_status it ON it.id_item = ig.id_item) AS item_info ON item_info.product = i.id JOIN genres g ON g.id = item_info.id_genre JOIN platforms p ON p.id = item_info.id_platform JOIN status s ON s.id = item_info.id_status WHERE i.id = $1;`, [id])
}

async function updateItem({ id, status }: AddItemType) {
  return db.query('UPDATE itens_status SET id_status = $1 WHERE id_item = $2;', [status, id])
}

export default {
  listAllItens,
  postItem,
  addItemInfo,
  findItem,
  findItemByName,
  updateItem
}