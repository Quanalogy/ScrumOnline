// =========== Imports =========== \\
import express = require("express");
import logger = require("morgan");
import bodyParser = require("body-parser");
import mongoClient = require("mongoose");
import {Schema} from "mongoose";
//import * as routes from "../routes/routes.ts";
import routes = require("../routes/routes");        // routes .ts
// =========== Consts(former var) =========== \\
const port: number = process.env.PORT || 3000;
const app = express();
const router = express.Router();            // for routing requests
const db = mongoClient.connection;
const uri = 'mongodb://localhost/test';
const schema = mongoClient.Schema;

routes(app);                                // initialize routes
app.set('view engine', 'ejs');              // using ejs
router.use(logger);     // Nice logging of requests
router.use('/', routes);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// =========== DB Stuff =========== \\
const userSchema = new Schema({     // defines the values associated with an user
    username: String,
    password: String
});

mongoClient.connect(uri);
db.on('error', console.error);      // console log error if any
db.once('open', function() {
    // Create your schemas and models here.
    console.log("Connected to the DB");
    const collection = db.collection("users");      // a collection of users
});

app.listen(port, function() {
    console.log("Running on port 3000");
});
