import express from "express"
import path from "path"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(process.cwd(), "public")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(process.cwd(), "public", "pages", "index.html"))
})

export default app