const express = require('express'); //connection eka hadanne mehema
const mongoose = require('mongoose'); //database eka connect karanne mehema
const cors = require('cors'); //cross-origin requests allow karanne mehema
require('dotenv').config(); //environment variables load karanne mehema

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express(); //Express application eka create karanne mehema

app.use(cors()); //CORS middleware eka use karanne mehema
app.use(express.json()); //JSON request bodies parse karanne mehema

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB')) //MongoDB database eka connect karanne mehema
  .catch((err) => console.error('MongoDB connection error:', err)); //MongoDB database eka connect karanne mehema

app.use('/api/auth', authRoutes); //Auth routes eka use karanne mehema
app.use('/api/tasks', taskRoutes); //Task routes eka use karanne mehema

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running' }); //API root endpoint eka define karanne mehema
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); //Server eka start karanne mehema
});
