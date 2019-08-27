import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';

const port = process.env.PORT || 8081;


const express = require('express');

const app = express();
const uri = 'mongodb://admin:admin1@cluster0-shard-00-00-1wkem.mongodb.net:27017,cluster0-shard-00-01-1wkem.mongodb.net:27017,cluster0-shard-00-02-1wkem.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
const option = {
  user: 'admin',
  pass: 'admin1',
  useNewUrlParser: true,
  dbName: 'datapeople',
};
mongoose.connect(uri, option);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection has been connected.');
});

app.listen(port, () => {
  console.log('Start server at port', port);
});
