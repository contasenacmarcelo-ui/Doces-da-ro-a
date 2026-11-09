import app from "./src/app.js"

const server = app 
const PORT = 3000


server.listen(PORT, ()=>{
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
})