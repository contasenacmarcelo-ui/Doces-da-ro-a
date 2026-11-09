import pool from "../config/db.js"

async function buscarPedidos(req,res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (error) {
        res.status(500).json({erro: "Erro ao buscar pedidos no banco"})
    }
}

async function cadastrarPedidos(req,res) {
    try {
        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const descricao = (req.body.descricao || "").trim()

        if(!nome || !email || ! descricao){
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("INSERT INTO pedidos (nome, email, descricao) VALUES ( ?, ?, ?)"[nome, email, descricao])

        
    } catch (error) {
        
    }
}
export{buscarPedidos}