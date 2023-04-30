import { itens } from "@prisma/client";
import errors from "../errors/index";
import { AddItemType, DataParams } from "../protocols/itensProtocols";
import itensRepositories from "../repositories/itensRepositories";

async function listAllItens(): Promise<DataParams[]> {
    const itens: DataParams[] = await itensRepositories.listAllItens();
    
    return itens;
}

async function postItem({ name, genre, platform, status }: AddItemType): Promise<DataParams> {
    
    const itemExist: itens = await itensRepositories.findItemByName({ name });
    if (itemExist) throw errors.conflictError('This item was already added');
    await itensRepositories.postItem({ name });
    
    const item: itens = await itensRepositories.findItemByName({ name });
    
    await itensRepositories.addItemInfo({ id: item.id, genre, platform, status });
    
    const itemAdded: DataParams = await itensRepositories.findItem({ id: item.id });
    
    return itemAdded

}

async function updateItem({ id, status }: AddItemType): Promise<DataParams> {
    const item = await itensRepositories.findItemById({ id });
    
    if (!item) throw errors.notFoundError('This item was not found');

    await itensRepositories.updateItem({ id, status });

    const itemUpdated: DataParams = await itensRepositories.findItem({ id });
    return itemUpdated;

}

async function deleteItem({ id } : AddItemType): Promise<void> {
    const item = await itensRepositories.findItemById({ id });
    if (!item) throw errors.notFoundError('This item was not found');

    await itensRepositories.deleteItem({ id });
}

export default {
    listAllItens,
    postItem,
    updateItem,
    deleteItem
}