const db = require("../models");
const SignUp = db.signup;

//create new user
exports.create = (req, res) =>{
  if(!req.body){
    res.status(400).send({message: "Content must not be empty"})
    return;
  }

  const signup = new SignUp({
    username: req.body.username,
    password: req.body.password
  })

  //save user
  signup
  .save(signup)
  .then((data) =>{
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error has occured while signing up"
    })
  })
}
