import express from "express"

import { buscarPedidos } from "../controllers/pedidosControllers.js";
import { cadastrarPedidos } from "../controllers/pedidosControllers.js";

const router = express.Router()

router.get("/", buscarPedidos)
router.post("/", cadastrarPedidos)

export default router