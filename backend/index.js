const express = require("express")

const app = express();
const router = require('./router/router')

app.use("/", router)

const PORT = 8080;

app.listen(PORT, ()=>{
   console.log(`server is running on port: ${PORT} `)
})