import errors from "../errors/index.js";
import { AddItemType, ItensFormat } from "../protocols/itensProtocols.js";
import itensRepositories from "../repositories/itensRepositories.js";

async function listAllItens() {

    const itens = await itensRepositories.listAllItens();
    
    return itens;
}

async function postItem({ name, genre, platform, status }: AddItemType) {
    const itemExist = await itensRepositories.findItemByName({ name });
    if (itemExist) throw errors.conflictError('This item was already added');
    await itensRepositories.postItem({ name });

    const item = await itensRepositories.findItemByName({ name });
    if (!item) throw errors.notFoundError('This item id was not found');

    await itensRepositories.addItemInfo({ id: item.id, genre, platform, status });

    const itemAdded = await itensRepositories.findItem({ id: item.id });
    return itemAdded

}

async function updateItem({ id, status }: AddItemType) {
    const itemExist = await itensRepositories.findItem({ id });
    if (!itemExist) throw errors.notFoundError('This item was not found');

    await itensRepositories.updateItem({ id, status });

    const itemUpdated = await itensRepositories.findItem({ id });
    return itemUpdated;

}

async function deleteItem({ id } : AddItemType): Promise<void> {
    const itemExist = await itensRepositories.findItem({ id });
    if (!itemExist) throw errors.notFoundError('This item was not found');

    await itensRepositories.deleteItem({ id });
}

export default {
    listAllItens,
    postItem,
    updateItem,
    deleteItem
}