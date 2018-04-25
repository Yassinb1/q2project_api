const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3005;

const todolistRoutes = require ("./routes/todolist");

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/todolist', todolistRoutes);

app.listen(PORT, () => {
  console.log(`API is running. Listening on port # ${PORT}`)
});


module.exports = app;
