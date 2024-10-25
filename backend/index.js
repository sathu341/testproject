const express=require('express')
const cors=require('cors')
const port=9000;
const api=express();

  api.use(cors())
  api.use(express.urlencoded({extended:true}))
  api.use(express.json())
//router connect 
const userrouter=require('./routes/userRouter')
api.use("/userrouter",userrouter)








api.listen(port,()=>{
    console.log("server running...  http://localhost:9000")
})

