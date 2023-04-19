import { Router } from "express";
import itensRoutes from "./itensRoutes";

const routes = Router();

routes.use('/itens', itensRoutes);

export default routes;