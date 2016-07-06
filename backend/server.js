"use strict";
var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
// app.use('/app', express.static(path.resolve(__dirname, 'app')));
// app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
};
app.get("/*", renderIndex);
app.listen(port, function () {
    //
});
//# sourceMappingURL=server.js.map