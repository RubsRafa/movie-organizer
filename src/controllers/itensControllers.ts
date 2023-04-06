import { Request, Response, NextFunction } from "express";
import itensServices from "../services/itensServices.js";
import httpStatus from "http-status";
import { ItensFormat } from "../protocols/itensProtocols.js";

async function listAllItens(req: Request, res: Response, next: NextFunction) {
    try {
        const allItens: ItensFormat[] = await itensServices.listAllItens();
        return res.status(httpStatus.OK).send(allItens)
        
    } catch (err) {
        next(err);
    }
}


export default {
    listAllItens
}