/**
 * Created by Munke on 09-07-2016.
 */
// =========== Imports =========== \\
import express = require("express");
import path = require("path");

export = (app) => {
// =========== Functions =========== \\
    const notImplemented = (req:express.Request, res:express.Response) => {
        res.sendStatus(501);
    };

    const renderFrontpage = (req:express.Request, res:express.Response) => {
        res.render("index");
    };

    const pathNotFound = (req:express.Request, res:express.Response) => {
        res.render("pathNotFound");
    };

    const renderIndex = (req:express.Request, res:express.Response) => {      // function for serving the index.ejs file
        res.render("login");
    };

// =========== Routes =========== \\

    app.get("/", renderFrontpage);              // Show index - later on login
    app.get("/test", notImplemented);       // paths that should be implemented but isn't at the moment
    app.get("/login", renderIndex);
    app.get("/*", pathNotFound);            // paths that are unknown
}