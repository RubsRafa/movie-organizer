import { ItensFormat } from "../protocols/itensProtocols.js";
import itensRepositories from "../repositories/itensRepositories.js";

async function listAllItens() {
    const { rows: itens } : { rows: ItensFormat[]} = await itensRepositories.listAllItens();
    return itens;
}

export default {
    listAllItens
}