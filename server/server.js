const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:4000/",
};

app.use(cors(corsOptions));
//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ web_project: "healthsys", owner: "Duzie Uche-Abba", version: 1 });
});

app.get("/signup", (req, res) => {
  res.json({ message: "this is the signup page" });
});


//This redirects from sign in to login
app.post("/signup", (req, res) => {
  res.json({ message: "this redirects to the login page" });
  res.redirect("/login");
  if (req.user) {
    var redir = { redirect: "/" };
    return res.json(redir);
  } else {
    var redire = { redirect: "/login" };
    return res.json(redire);
  }
});

app.get("/login", (req, res) => {
  res.json({ message: "this is the login page" });
});

// this redirects from login to protected
app.post("/login", (req, res) => {
  res.json({ message: "this redirects to the main content" });
  res.redirect("/query"); // the path '/query' has children hence the *.
  if (req.user) {
    var redir = { redirect: "/" };
    return res.json(redir);
  } else {
    var redire = { redirect: "/query" };
    return res.json(redire);
  }
});


//connecting the databse to mongoose
const db = require("./models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!", err);
    process.exit();
  });

require("./routes/doc_routes")(app);
require("./routes/medrec_routes")(app);
require("./routes/patient_routes")(app);
require("./routes/signup_routes")(app);
require("./routes/login_routes")(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("LISTENING TO PORT", PORT);
});
