const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const API_PORT = 4000;

let User = require('./model/security/User');

const app = express();
const routes = express.Router();

app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbUser:1234@cluster0-zawzu.mongodb.net/electrohouse', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
});

/**User endopoints */
routes.route('/').get( function(req, res) {        
    User.find(function(err, data){
        if (err) {        
            console.log(err);
            //res.json({ success: false, error: err });
            //res.json = { success: false, error: err };
            return res.json({ success: false, error: err });
        }
        else {
            console.log("ok");
            //res.json({success:true, response: data});
            //res.json = { success:true, response: data};
            return res.json({success:true, response: data});
        }
    });
});

routes.route('/user').get( function(req, res) {
    User.find(function(err, data){
        if (err) {        
            console.log(err);
            return res.json({ success: false, error: err });
        }
        else {
            console.log("ok");
            return res.json({success:true, response: data});
        }
    });
});

routes.route('/user/add').post( function(req,res){
    let user = new User(req.body);
    
    user.save()
        .then( user=>{
            res.status(200).json({'User':'Usuario añadido satisfactoriamente'});
        })
        .catch(err=>{
            res.status(400).send('Fallo al añadir un nuevo usuario');
        });
});


app.use('/api', routes); /*Router added as a middleware abd request path starting with "/pbr"*/

app.listen(API_PORT,function() {
    console.log("Server is running up on Port:" + API_PORT);
});