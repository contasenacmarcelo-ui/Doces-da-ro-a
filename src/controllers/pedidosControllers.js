import pool from "../config/db.js"

async function buscarPedidos(req,res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (error) {
        res.status(500).json({erro: "Erro ao buscar pedidos no banco"})
    }
}
export{buscarPedidos}