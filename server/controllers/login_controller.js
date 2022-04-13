const db = require("../models");
const Login = db.login;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(500).send({ message: "Error! Cannot login at this time!" });
    return;
  }

  const login = new Login({
    username: req.body.username,
    password: req.body.password,
  });

  login
    .save(login)
    .then((data) => {
      res.send(data);
      console.log("Successfully logged in!");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong, can't login!",
      });
    });
};
