const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3005;

const calendarRoutes = require(./routes/calendar);


app.listen(PORT, () => {
  console.log(`API in action. Listening on port # ${PORT}`)
});
