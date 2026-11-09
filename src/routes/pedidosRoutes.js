import express from "express"

import { buscarPedidos } from "../controllers/pedidosControllers.js";

const router = express.Router()

router.get("/", buscarPedidos)

export default router