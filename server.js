
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

require('./models/todo');
const todocontroller = require('./controller/todocontroller');

const PORT = process.env.PORT || 8000;
const app = express();
let mongodbURI = 'mongodb://dheeraj:dhreej7210@ds127153.mlab.com:27153/dheeraj';

app.use(bodyparser.urlencoded({
      extended: true
}));

app.use(bodyparser.json());

app.use(cors());

mongoose.promise = global.promise;
mongoose.connect(mongodbURI,{
     useMongoClient: true,
});
app.route('/')
  .get(function(req, res){
    return res.json({
           message: 'welcome to this world.'
    })
  })
  .post(function(req,res){
      return todocontroller.createTodo(req, res);
  });

  app.listen(PORT);

  console.log(`server started successfully at :${PORT}`);
