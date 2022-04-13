const db = require('../models');
const Doctors = db.doctors;

exports.create = (req, res) => {
  //validate our form so that empty forms are not submitted
  if (!req.body) {
    //check if this works
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  //create a medical record
  const doctors = new Doctors({
    doctorID: req.body.doctorID,
    docfirstname: req.body.docfirstname,
    doclastname: req.body.doclastname,
    docemail: req.body.docemail,
    doctelephone: req.body.doctelephone,
    specialization: req.body.specialization,
  });

  //save medical record
  doctors
    .save(doctors)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating medical record!",
      });
    });
};

//Retrieve data
exports.findAll = (req, res) => {
  const doctorID = req.query.doctorID;
  var condition = doctorID ? { doctorID: { $regex: new RegExp(doctorID), $options: "i" } } : {};
  Doctors.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving medical record!",
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Doctors.findById(id)
    .then(data =>{
        if(!data)
        res.status(404).send({message: "Not found medical record with id " + id})
        else res.send(data)
    })
    .catch(err =>{
        res.status(500).send({message: "Error retrieving medical record with id=" + id}, err)
    })
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data cannot be empty!"
        })
    }
    const id = req.params.id;

    Doctors.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({
                message: `Cannot update with id=${id}`
            });
        } else res.send({message: 'Medical record was updated successfully.'})
    })
    .catch(err =>{
        res.status(500).send({
            message: `Error updating medical record with id=${id}`
        }, err);
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Doctors.findByIdAndRemove(id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message: `Cannot delete medical record with id=${id}`
            })
        } else {
            res.send({message: 'Medical record was deleted successfully'})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: `Could not delete medical record with id=${id}`
        }, err)
    }) 
};

exports.deleteAll = (req, res) => {
    Doctors.deleteMany({})
    .then(data =>{
        res.send({
            message: `${data.deleteCount} medical records were deleted!`
        })
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || 'Some errors occurred while deleting all medical records!'
        })
    })
};
