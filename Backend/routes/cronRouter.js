const express  = require('express')

const router = express.Router();

router.get('/ping', async(req, res)=>{
    res.status(200)
    res.json({"message" : "PONG"})
    res.send()
})


module.exports= router