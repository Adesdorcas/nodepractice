const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("wakeupprayer in necessary");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("wakeupprayer");
});