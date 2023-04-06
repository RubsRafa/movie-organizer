import { Request, Response, NextFunction } from "express";
import { ValidationResult, Schema } from "joi";
import { TypesOfSchema } from "../protocols/itensProtocols.js";
import err from '../errors/index.js'

export function validateSchema(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as TypesOfSchema;
        const { error }: ValidationResult = schema.validate(body, { abortEarly: false });

        if (error) {
            const errors: string[] = error.details.map((d) => d.message);
            throw err.conflictError(errors);
        
        }
        next();
    }
}