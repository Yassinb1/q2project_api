const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3005;

const calendarRoutes = require(./routes/todolist);


app.listen(PORT, () => {
  console.log(`API is running. Listening on port # ${PORT}`)
});


module.exports = app;
