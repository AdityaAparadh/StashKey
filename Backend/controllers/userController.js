const User = require('../models/User');
const db  = require('../database/db')

const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => { 

    if(!req.body.name || !req.body.email || !req.body.masterPass || !req.body.securityKey){
        res.status(400).json({message : "Please provide all the required fields"});
        return;
    }

    const { name, email, masterPass, securityKey } = req.body;

    const duplicateUser = await User.findOne({ email });
    if(duplicateUser){
        res.status(409);
        res.json({ message : "User already exists!" });
    }
    else{

        const hashedPassword = await Bun.password.hash(masterPass, { algorithm : "bcrypt", cost : 5});
        const user = new User({
            name : name,
            email : email,
            hashedPassword : hashedPassword, 
            securityKey : securityKey,
            vault : "",
            kdfRounds : process.env.DEFAULT_KDF_ITERATIONS,
            lastUpdated : Date.now()
        });
        await user.save();
        res.json({ message: 'User created successfully!' });
    }
}

exports.login = async (req, res) => {

    
    if(!req.body.email || !req.body.masterPass){
        res.status(400).json({message : "Please provide all the required fields"});
        return;
    }
    const { email, masterPass } = req.body;

    const user = await User.findOne({ email : email });
    if(!user){
        res.status(404)
        res.json({ message : "User not found!" });
        
    }else{

        const isValid = await Bun.password.verify(masterPass, user.hashedPassword);
        
        if(!isValid){
            res.status(401)
            res.json({ message : "Invalid credentials!" });
        }else{
            const token = jwt.sign({ email : email }, process.env.JWT_SECRET_KEY, { expiresIn : '1h' });
            res.json({ message : "Login Successful!", token : token });
            
        }
    }

}


exports.getVault = async (req, res) => {

    let jwtToken =  req.headers.authorization.split(" ")[1];
    let token;
    try{
        token = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    }catch(err){
        res.json({ message : "Invalid JWT token!" });
    }
    const user = await User.findOne({ email : token.email });

    if(!user){
        res.json({ message : "User not found!" });
        return;
    }
    if(token && user ){
        res.json({ message : "Vault fetched successfully!", vault : user.vault });
    }
}



exports.updateVault = async (req, res) => {
    let jwtToken =  req.headers.authorization.split(" ")[1];
    let token;
    try{
        token = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    }catch(err){
        res.json({ message : "Invalid JWT token!" });
    }
    const user = await User.findOne({ email : token.email });

    if(!user){
        res.json({ message : "User not found!" });
        return;
    }
    
    if(token && user ){
        user.vault = req.body.vault;
        user.lastUpdated = Date.now();
        await user.save();
        res.json({ message : "Vault updated successfully!" });
    }
}

exports.getMeta = async (req, res) => {


    let jwtToken =  req.headers.authorization.split(" ")[1];
    let token;
    try{
        token = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    }catch(err){
        res.json({ message : "Invalid JWT token!" });
    }
    const user = await User.findOne({ email : token.email });

    if(!user){
        res.json({ message : "User not found!" });
        return;
    }
    
    if(token && user ){
        res.json({ message : "User fetched successfully!", user : user });
    }
}