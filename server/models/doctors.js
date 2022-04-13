module.exports = (mongoose) => {
  const Doctors = mongoose.model(
    "doctors",
    mongoose.Schema(
      {
        doctorID: Number,
        docfirstname: String,
        doclastname: String,
        docemail: String,
        doctelephone: Number,
        specialization: String,
      },
      { timestamps: true }
    )
  );
  return Doctors;
};
