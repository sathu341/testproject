const getTitle= (req,res)=>{
   res.json("welcome to  nodejs")
}
//create 
const create=(req,res)=>{
    const {subtitle}=req.body 
    console.log(subtitle)
    res.json("successfully")
}
//addition
const addition=(req,res)=>{
    const {no1,no2}=req.body;
    let sum=Number(no1)+Number(no2)
    res.json(sum)
}

module.exports={
    getTitle,
    create,
    addition
}