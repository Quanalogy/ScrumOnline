// =========== Imports =========== \\
import express = require("express");
import path = require("path");
import logger = require("morgan");
import bodyParser = require("body-parser");
import mongoClient = require("mongoose");
// =========== Consts(former var) =========== \\
const port: number = process.env.PORT || 3000;
const app = express();
const router = express.Router();            // for routing requests
const db = mongoClient.connection;
// app.use('/app', express.static(path.resolve(__dirname, 'app')));
// app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.set('view engine', 'ejs');              //using ejs

router.use(logger);     // Nice logging of requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// =========== DB Stuff =========== \\
db.on('error', console.error);      // console log error if any
db.once('open', function() {
    // Create your schemas and models here.
    console.log("Connected to the DB");
    const collection = db.collection("users");      // a collection of users
});

mongoClient.connect('mongodb://localhost/test');


const notImplemented = (req: express.Request, res: express.Response) => {
    res.sendStatus(501);
};

const renderFrontpage = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
};

const pathNotFound = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "pathNotFound.html"));
};

const renderIndex = (req: express.Request, res: express.Response) => {      // function for serving the index.ejs file
    res.render("index");
};

app.get("/", renderFrontpage);              // Show index - later on login
app.get("/test", notImplemented);       // paths that should be implemented but isn't at the moment
app.get("/index", renderIndex);
app.get("/*", pathNotFound);            // paths that are unknown


app.listen(port, function() {
    console.log("Running on port 3000");
});
