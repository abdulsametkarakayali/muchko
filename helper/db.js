const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
  mongoose.connect(process.env.mongodb ,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex : true}
  );
  
  mongoose.connection.on('open', () => {
    // console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};
