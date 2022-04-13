module.exports = app =>{
    const doctors = require('../controllers/doc_controller');
    var router = require("express").Router();

    router.post('/', doctors.create);
    router.get('/', doctors.findAll);
    router.get('/:id', doctors.findOne)
    router.put('/:id', doctors.update)
    router.delete('/:id', doctors.delete)
    router.delete('/', doctors.deleteAll)
    app.use('/api/doctors', router)
}