// =========== Imports =========== \\
import express = require("express");
import path = require("path");
import logger = require("morgan");
import bodyParser = require("body-parser");

// =========== Consts(former var) =========== \\
const port: number = process.env.PORT || 3000;
const app = express();
const router = express.Router();            // for routing requests
// app.use('/app', express.static(path.resolve(__dirname, 'app')));
// app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

router.use(logger);     // Nice logging of requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const notImplemented = (req: express.Request, res: express.Response) => {
    res.sendStatus(501);
};

const renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
};

const pathNotFound = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "pathNotFound.html"));
};

app.get("/", renderIndex);              // Show index - later on login
app.get("/test", notImplemented);       // paths that should be implemented but isn't at the moment
app.get("/*", pathNotFound);            // paths that are unknown

app.listen(port, function() {
    console.log("Running on port 3000");
});
