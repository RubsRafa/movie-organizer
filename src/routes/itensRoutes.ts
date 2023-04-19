import { Router } from "express";
import itensControllers from "../controllers/itensControllers";
import { validateSchema } from "../middlewares/validateSchema";
import schemas from "../schemas/itensSchemas";

const itensRoutes = Router();

itensRoutes.get('/', itensControllers.listAllItens);
itensRoutes.post('/', validateSchema(schemas.itemSchema), itensControllers.postItem);
itensRoutes.put('/:id', itensControllers.updateItem);
itensRoutes.delete('/:id', itensControllers.deleteItem);

export default itensRoutes;