import { Request, Response, NextFunction } from "express";
import itensServices from "../services/itensServices.js";
import httpStatus from "http-status";

async function listAllItens(req: Request, res: Response, next: NextFunction) {
    try {
        const allItens = await itensServices.listAllItens();
        return res.status(httpStatus.OK).send(allItens)
        
    } catch (err) {
        next(err);
    }
}

export default {
    listAllItens
}