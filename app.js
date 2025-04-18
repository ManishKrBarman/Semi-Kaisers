const express = require('express');
const app = express();
const path = require('path');
const serverless = require("serverless-http");
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));


router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})