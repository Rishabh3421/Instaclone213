const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    return res.status(200).json({
        username:"Rishabh"
    })
})

app.listen(3001,()=>{
    console.log(`server started`)
})

