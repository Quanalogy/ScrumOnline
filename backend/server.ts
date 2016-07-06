import express = require("express");
import path = require("path");

const port: number = process.env.PORT || 3000;
const app = express();

// app.use('/app', express.static(path.resolve(__dirname, 'app')));
// app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

const renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
};

app.get("/*", renderIndex);

app.listen(port, function() {
    //
});
