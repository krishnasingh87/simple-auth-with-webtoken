require('dotenv').config();
const app = require('express')();
const routes = require('./routes');
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(port, () => {
  console.log('App listening on port ',port);
});