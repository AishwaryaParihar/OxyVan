const express = require("express")

const router = express.Router()

// router.get("/",(req,res)=>{
//     res.status(200).send("this is route")
// })

router.route("/").get((req,res)=>{
    res.status(200).send("this is route with")
})
router.route("/register").get((req,res)=>{
    res.status(200).send("this is route with register")
})

module.exports = router;