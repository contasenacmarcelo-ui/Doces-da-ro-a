import pool from "../config/db.js"

async function buscarPedidos(req,res) {
    try {
        const [rows] = await pool.execute("SELECT * FROM pedidos")

        res.json(rows)
    } catch (error) {
        return  res.status(500).json({erro: "Erro ao buscar os pedidos no banco"})
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

        await pool.execute("INSERT INTO pedidos (nome, email, descricao) VALUES ( ?, ?, ?)", [nome, email, descricao])

        res.json({mensagem: "Pedido cadastrado com sucesso!"})
    } catch (error) {
        return  res.status(500).json({erro: "Erro ao cadastrar os pedidos no banco"})
    }
}

async function atualizarPedido(req,res) {
    try {
        const id = req.params.id 

        const nome = (req.body.nome || "").trim()
        const email = (req.body.email || "").trim()
        const descricao = (req.body.descricao || "").trim()

        if(!nome || !email || ! descricao){
            res.json("Todos os campos são obrigatórios!")
        }

        await pool.execute("UPDATE pedidos SET nome = ?, email = ? , descricao = ? WHERE id =?", [nome, email, descricao, id])

        res.json({  status:"Pedido atualizado com sucesso!"})
    } catch (error) {
        return  res.status(500).json({erro: "Erro ao atualizado os pedidos no banco"})
    }
}

async function apagarPedidos(req,res) {
    try {
        const id = req.params.id 
        
        await pool.execute("DELETE FROM pedidos WHERE id = ?",[id])

         res.json({status:"Pedido deletado com sucesso!"})
    } catch (error) {
        return  res.status(500).json({erro: "Erro ao cadastrar os pedidos no banco"})
    }
}
export{buscarPedidos, cadastrarPedidos, atualizarPedido, apagarPedidos}