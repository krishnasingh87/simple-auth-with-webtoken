var services = require('./../services');

exports.loginController = (req, res) => {
    services.login(req, res);
};
exports.logoutController = (req, res) => {
    services.logout(req, res);
};
exports.userInfoController = (req, res) => {
    services.userInfo(req, res);
};
exports.validateController = (req, res) => {
   services.tokenValidation(req, res);
};
