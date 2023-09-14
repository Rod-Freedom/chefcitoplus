// Import necessary Node.js modules and libraries
const express = require("express"); //hanlde routes
const session = require("express-session"); //sessions
const exphbs = require("express-handlebars"); //front
const path = require("path"); //public path
const routes = require("./controllers"); //routes
const sequelize = require("./config/connection"); //db connection
const SequelizeStore = require("connect-session-sequelize")(session.Store); //store session

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const cookie_sess = {
  secret: "Secret chef", //secret message

  //cookie
  cookie: {
    maxAge: 1800000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },

  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//use cookie session
app.use(session(cookie_sess));

//set handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src"))); //adding to the path the folder src

//Using controllers as route
app.use(routes);

//Starting server listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
