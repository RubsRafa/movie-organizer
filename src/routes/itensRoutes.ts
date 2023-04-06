import { Router } from "express";
import itensControllers from "../controllers/itensControllers.js";

const itensRoutes = Router();

itensRoutes.get('/all', itensControllers.listAllItens);

export default itensRoutes;