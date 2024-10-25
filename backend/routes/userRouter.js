
const express=require('express')
const router=express.Router()
//routing 
const {getTitle, create, addition}=require('../control/userCtrl')
router.route("/fetch").get(getTitle)
router.route("/create").post(create)
router.route("/addition").post(addition)

module.exports=router