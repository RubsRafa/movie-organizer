import itensRepositories from "../repositories/itensRepositories.js";

async function listAllItens() {
    const { rows: itens } = await itensRepositories.listAllItens();
    return itens;
}

export default {
    listAllItens
}