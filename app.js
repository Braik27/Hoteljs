const express = require('express');
const mongoose = require('mongoose');
const HotelRoutes = require('./routes/HotelRoutes'); 

const app = express();


mongoose
  .connect('mongodb://127.0.0.1:27017/js-test') 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });


app.use(express.json());


app.use('/HOT', HotelRoutes); 


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
