const db = require('../models');
const Patients = db.patients;

exports.create = (req, res) => {
  //validate our form so that empty forms are not submitted
  if (!req.body) {
    //check if this works
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  //create a medical record
  const patients = new Patients({
    patientID: req.body.patientID,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    postaladdress: req.body.postaladdress,
    email: req.body.email,
    telephone: req.body.telephone,
    nextofkin: req.body.nextofkin,
    nextofkintel: req.body.nextofkintel,
    bloodgroup: req.body.bloodgroup,
  });

  //save medical record
  patients
    .save(patients)
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
  const patientID = req.query.patientID;
  var condition = patientID ? { patientID: { $regex: new RegExp(patientID), $options: "i" } } : {};
  Patients.find(condition)
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

    Patients.findById(id)
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

    Patients.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
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

    Patients.findByIdAndRemove(id)
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
        })
    }) 
};

exports.deleteAll = (req, res) => {
    Patients.deleteMany({})
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
