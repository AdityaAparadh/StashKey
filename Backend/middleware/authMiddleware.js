const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            res.status(401).json({msg: "No JWT Token found"});
            return;
        }
        let decoded
        try{
            decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        }catch(err){
            res.status(401).json({msg: "Invalid JWT Token"});
            return;
        }
        req.user = decoded.user;
        console.log("HERE")

        next();
    }catch(err){
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = auth;