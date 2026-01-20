import express from 'express'
const router = express.Router()

router.get("/login", (req, res)=>{
    res.render("user/login")
})
router.get("/register", (req, res)=>{
    res.render("user/register")
})
router.post("/register", (req, res)=>{
    const data = req.body
    console.log(data);
    
    res.render("user/register")
})

export default router