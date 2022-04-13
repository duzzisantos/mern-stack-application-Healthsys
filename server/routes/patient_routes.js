module.exports = app =>{
    const patient = require('../controllers/patient_controllers');
    var router = require("express").Router();

    router.post('/', patient.create);
    router.get('/', patient.findAll);
    router.get('/:id', patient.findOne)
    router.put('/:id', patient.update)
    router.delete('/:id', patient.delete)
    router.delete('/', patient.deleteAll)
    app.use('/api/patients', router)
}