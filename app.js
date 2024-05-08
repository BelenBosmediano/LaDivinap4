require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');


// incorpora el modelo
require("./app_api/models/db.js");

const apiRouter = require("./app_api/routes/index.js")

const indexRouter = require("./app_server/routes/index");
const perfilRouter = require("./app_server/routes/perfil");
const eventoRouter = require("./app_server/routes/evento");
const metodopagRouter = require("./app_server/routes/metodopag");
const perfilusuRouter = require("./app_server/routes/perfilusu");
const aboutRouter = require("./app_server/routes/about");
const registroRourter = require ("./app_server/routes/registro");


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'app_public', 'build')));
app.use(express.static(path.join(__dirname, "public")));


app.get('/eventos', function (req, res) {
  res.sendFile(path.join(__dirname, 'app_public','build' ,'index.html'));
});

app.use("/", indexRouter);
app.use("/perfil", perfilRouter);
app.use("/evento2", eventoRouter);
app.use("/metodopag", metodopagRouter);
app.use("/perfilusu", perfilusuRouter);
app.use("/about",aboutRouter);
app.use("/registro",registroRourter);



//REST API
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});




module.exports = app;
