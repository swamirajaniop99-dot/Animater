const express=require("express")
const app=express()

app.use(express.json())

app.post("/generate",(req,res)=>{

let prompt=req.body.prompt

console.log("Prompt:",prompt)

res.json({
status:"video generated",
video:"demo.mp4"
})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})
