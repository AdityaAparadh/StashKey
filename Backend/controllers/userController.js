const User = require('../models/User');
const db  = require('../database/db')

const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => { 
    const { name, email, masterPass, securityKey } = req;
    console.log(req)
    const hashedPassword = await Bun.password.hash(masterPass, { algorithm : "bcrypt", cost : 5});
    console.log(hashedPassword)
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

exports.login = async (req, res) => {

    const { email, masterPass } = req;
    
    const user = await User.findOne({ email : email });
    if(!user){
        res.json({ message : "User not found!" });
    }
    console.log(user.hashedPassword)
    const isValid = await Bun.password.verify(masterPass, user.hashedPassword);

    if(!isValid){
        res.json({ message : "Invalid credentials!" });
    }else{

        const token = jwt.sign({ email : email }, process.env.JWT_SECRET_KEY, { expiresIn : '1h' });
        res.json({ message : "Login successful!", token : token });
    
    }

}


exports.vault = async (req, res) => {
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
    }
    
    if(token && user ){
        user.vault = req.body.vault;
        user.lastUpdated = Date.now();
        await user.save();
        res.json({ message : "Vault updated successfully!" });
    }
}