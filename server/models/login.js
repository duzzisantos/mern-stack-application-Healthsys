module.exports = (mongoose) => {
  const Login = mongoose.model(
    "login_count",
    mongoose.Schema(
      {
        username: {
          type: String,
          required: true,
        },
        password: String,
      },
      { timestamps: true }
    )
  );
  return Login;
};


