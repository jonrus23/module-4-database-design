const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
//new code
const mongoose = require('mongoose');

const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

//Connext to database
mongoose.connect(MONGO_DATA_BASE,
  //connection recipie
  {
    useNewUrlParser: true
  }).then(con=>{
    console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  });



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
