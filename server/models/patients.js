const Joi = require("joi");

module.exports = (mongoose) => {
  const Patients = mongoose.model(
    "patients",
    mongoose.Schema(
      {
        patientID: Joi.number(),
        firstname: Joi.string(),
        lastname: Joi.string(),
        postaladdress: Joi.string(),
        email: Joi.string(),
        telephone: Joi.number(),
        nextofkin: Joi.string(),
        nextofkintel: Joi.number(),
        bloodgroup: Joi.string(),
      },
      { timestamps: true }
    )
  );
  return Patients;
};
