import { Router } from "express";
import itensControllers from "../controllers/itensControllers.js";

const itensRoutes = Router();

itensRoutes.get('/', itensControllers.listAllItens);

export default itensRoutes;