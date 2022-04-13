module.exports = app =>{
    const medrecords = require('../controllers/medrec_controller');
    var router = require("express").Router();

    router.post('/', medrecords.create);
    router.get('/', medrecords.findAll);
    router.get('/:id', medrecords.findOne)
    router.put('/:id', medrecords.update)
    router.delete('/:id', medrecords.delete)
    router.delete('/', medrecords.deleteAll)
    app.use('/api/medrecords', router)
}