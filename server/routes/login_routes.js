module.exports = (app) => {
  const login = require("../controllers/login_controller");
  var router = require("express").Router();

  router.post("/", login.create);
  app.use("/api/login", router);
};
