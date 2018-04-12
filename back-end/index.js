import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/rugRoutes'
import cors from 'cors';



const app = express();
const PORT = 3000;

//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RUGdb', { 
    useMongoClient:true });


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});	
	


//bodyParser setup
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());



routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);