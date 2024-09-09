const express = require('express');

const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

                    
const port = 3000;


const AuthRouter = require('./routes/AuthRoutes');
const vaultRouter = require('./routes/vaultRoutes')
const cronRouter = require('./routes/cronRouter')

app.use('/auth', AuthRouter);
app.use('/vault', vaultRouter);
app.use('/cron', cronRouter )


// app.get('/vault', async (req, res) => {
    
//         if(!req.headers.authorization){
//             res.status(400).json({message : "Please provide JWT Authorization header"});
//         }else{
//             userController.vault(req, res);
//         }
    
//     });

// app.post('/vault', async (req, res) => {

//     if(!req.headers.authorization || !req.body.vault){
//         res.status(400).json({message : "Please provide JWT Authorization header and vault"});
//     }
//     else{
//         userController.updateVault(req, res);
//     }
// });



// app.get('/user', async (req, res) => {
//     userController.getUser(req, res);
// });

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

