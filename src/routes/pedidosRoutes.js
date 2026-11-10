import express from "express"

import { buscarPedidos } from "../controllers/pedidosControllers.js";
import { cadastrarPedidos } from "../controllers/pedidosControllers.js";
import { atualizarPedido } from "../controllers/pedidosControllers.js";
import { apagarPedidos } from "../controllers/pedidosControllers.js";

const router = express.Router()

router.get("/", buscarPedidos)
router.post("/", cadastrarPedidos)
router.put("/:id", atualizarPedido)
router.delete("/:id", apagarPedidos)

export default router