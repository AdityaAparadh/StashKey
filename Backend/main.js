const express = require('express');
const userController = require('./controllers/userController');


const app = express();
app.use(express.json());


                    
const port = 3000;
app.post('/signup', async (req, res) => {
        
    if(!req.body.name || !req.body.email || !req.body.masterPass || !req.body.securityKey){
        res.status(400).json({message : "Please provide all the required fields"});
    }else{
        userController.signup(req.body, res);    
    }
}
);

app.post('/login', async (req, res) => {

    if(!req.body.email || !req.body.masterPass){
        res.status(400).json({message : "Please provide all the required fields"});
    }else{
        userController.login(req.body, res);
    }

});

app.get('/vault', async (req, res) => {
    
        if(!req.headers.authorization){
            res.status(400).json({message : "Please provide JWT Authorization header"});
        }else{
            userController.vault(req, res);
        }
    
    });

app.post('/vault', async (req, res) => {

    if(!req.headers.authorization || !req.body.vault){
        res.status(400).json({message : "Please provide JWT Authorization header and vault"});
    }
    else{
        userController.updateVault(req, res);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

