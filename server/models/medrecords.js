const Joi = require("joi");

module.exports = (mongoose) => {
  const MedRecords = mongoose.model(
    "med_records",
    mongoose.Schema(
      {
        patientID: Joi.number(),
        doctorID: Joi.number(),
        diagnosis: Joi.string(),
        treatment_method: Joi.string(),
        prognosis: Joi.string(),
        prescriptions: Joi.string(),
      },
      { timestamps: true }
    )
  );
  return MedRecords;
};
