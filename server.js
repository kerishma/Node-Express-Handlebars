const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/connection');
// const BurgerRoutes = require('./models/burger');
const routes = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

// app.use('/burger', BurgerRoutes);

app.use(express.static(path.join(__dirname, '/public/assets')));
app.use(express.static(path.join(__dirname, '/models')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function () {
  console.log('App now listening at localhost:' + PORT);
});
