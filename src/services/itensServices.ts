import errors from "../errors/index";
import { AddItemType, ItensFormat } from "../protocols/itensProtocols";
import itensRepositories from "../repositories/itensRepositories";

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
    
    console.log('post ainda no service', item.id, typeof(item.id), genre, typeof(genre), platform, typeof(platform), status, typeof(status))
    await itensRepositories.addItemInfo({ id: item.id, genre, platform, status });
    
    console.log('post vai sair do service')
    const itemAdded = await itensRepositories.findItem({ id: item.id });
    console.log('retornou tudo certinho')
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