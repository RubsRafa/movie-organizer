import errors from "../errors/index.js";
import { AddItemType, ItensFormat } from "../protocols/itensProtocols.js";
import itensRepositories from "../repositories/itensRepositories.js";

async function listAllItens() {
    const { rows: itens } : { rows: ItensFormat[]} = await itensRepositories.listAllItens();
    return itens;
}

async function postItem({ name, genre, platform, status }: AddItemType): Promise<ItensFormat> {
    const { rowCount }: { rowCount: number} = await itensRepositories.findItemByName({ name });
    if (rowCount) throw errors.conflictError('This item was already added');
    await itensRepositories.postItem({ name });
    
    const { rows: [item] }: { rowCount: number, rows: ItensFormat[]} = await itensRepositories.findItemByName({ name });
    
    if(!item) throw errors.notFoundError('This item id was not found');
    
    await itensRepositories.addItemInfo({ id: item.id, genre, platform, status });
    
    const { rows: [itemAdded] }: {rows: ItensFormat[]} = await itensRepositories.findItem({ id: item.id });
    
    return itemAdded;

}

async function updateItem({ id, status }: AddItemType) {
    const { rowCount }: { rowCount: number } = await itensRepositories.findItem({ id });
    if (!rowCount) throw errors.notFoundError('This item was not found');

    await itensRepositories.updateItem({ id, status })

    const { rows: [itemUpdated] }: { rows: ItensFormat[]} = await itensRepositories.findItem({ id });
    return itemUpdated
}

async function deleteItem({ id } : AddItemType): Promise<void> {
    console.log('entrou no delete', id)
    const { rowCount }: { rowCount: number } = await itensRepositories.findItem({ id });
    console.log('verificou se item existe', rowCount)
    if (!rowCount) throw errors.notFoundError('This item was not found');
    console.log('item existe, vamos deletar')
    await itensRepositories.deleteItem({ id });
    console.log('item deletado')
}

export default {
    listAllItens,
    postItem,
    updateItem,
    deleteItem
}