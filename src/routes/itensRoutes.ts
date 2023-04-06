import { Router } from "express";
import itensControllers from "../controllers/itensControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemas from "../schemas/itensSchemas.js";

const itensRoutes = Router();

itensRoutes.get('/', itensControllers.listAllItens);
itensRoutes.post('/', validateSchema(schemas.itemSchema), itensControllers.postItem)

export default itensRoutes;