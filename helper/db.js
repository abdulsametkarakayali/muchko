const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://admin:Veriyaz348484@homework.qhfbr2i.mongodb.net/homework?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex : true}
  );

  mongoose.connection.on('open', () => {
    // console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};
