const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const hostsRoute = require('./routes/host');
const propertyRoute = require('./routes/properties');
const resvRoute = require('./routes/reservations');
const reviewRoute = require('./routes/reviews');
const calendarRoute = require('./routes/calendars');

app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Allow cross-origin requests

app.use('/hosts', hostsRoute);
app.use('/properties', propertyRoute);
app.use('/calendar', calendarRoute);
app.use('/reviews', reviewRoute);
app.use('/reservations', resvRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
