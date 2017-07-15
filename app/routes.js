var controllers = require('./controllers');

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'This is contact centre auth system!' });
});
routes.post('/login', (req, res) => {
  controllers.loginController(req, res);
});
routes.post('/validate', (req, res) => {
  controllers.validateController(req, res);
});
routes.post('/logout', (req, res) => {
  controllers.logoutController(req, res);
});
routes.post('/info', (req, res) => {
  controllers.userInfoController(req, res);
});

module.exports = routes;