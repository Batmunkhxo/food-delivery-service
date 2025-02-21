import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const port = 9999


app.get("/",(req,res)=>{
    res.send("service connected")
})

app.listen(port,()=>{
    console.log(`app listen working ${port}`)
})