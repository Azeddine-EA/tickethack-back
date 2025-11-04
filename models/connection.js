const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:MAlkTa2B99hOmibM@myfirstdatabase.orakmnj.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
