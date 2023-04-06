import { db } from "../config/db.js";

async function listAllItens() {
    return await db.query(`
    SELECT i.id, i.name, g.genre, p.name AS platform, s.status FROM itens i JOIN (SELECT ig.id_item AS product, ig.id_genre, ip.id_platform, it.id_status FROM itens_genres ig JOIN itens_platforms ip ON ip.id_item = ig.id_item JOIN itens_status it ON it.id_item = ig.id_item) AS item_info ON item_info.product = i.id JOIN genres g ON g.id = item_info.id_genre JOIN platforms p ON p.id = item_info.id_platform JOIN status s ON s.id = item_info.id_status;
    `)
}

export default {
    listAllItens
}