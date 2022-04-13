module.exports = app =>{
    const signup = require('../controllers/signup_controller');
    var router = require("express").Router();

    router.post('/', signup.create);
    app.use('/api/signup', router);
}