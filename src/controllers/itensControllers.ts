import { Request, Response, NextFunction } from "express";
import itensServices from "../services/itensServices";
import httpStatus from "http-status";
import { AddItemType, DataParams, IdType } from "../protocols/itensProtocols";

async function listAllItens(req: Request, res: Response, next: NextFunction) {
    try {
        const allItens: DataParams[] = await itensServices.listAllItens();
        return res.status(httpStatus.OK).send(allItens)
        
    } catch (err) {
        next(err);
    }
}

async function postItem(req: Request, res: Response, next: NextFunction) {
    const { name, genre, platform, status } = req.body as AddItemType;
 
    try {
        const itemAdded: DataParams = await itensServices.postItem({ name, genre, platform, status });
        return res.status(httpStatus.CREATED).send(itemAdded);
        
    } catch (err) {
        next(err);
    }
}

async function updateItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params as IdType;
    const { status } = req.body as AddItemType;

    try {

        const itemUpdated: DataParams = await itensServices.updateItem({ id, status });
        return res.status(httpStatus.OK).send(itemUpdated);
        
    } catch (err) {
        next(err)
    }
}

async function deleteItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params as IdType;
    
    try {
        
        await itensServices.deleteItem({ id });
        return res.sendStatus(httpStatus.OK)
        
    } catch (err) {
       next(err) 
    }
}


export default {
    listAllItens,
    postItem,
    updateItem,
    deleteItem
}