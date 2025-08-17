const express = require("express");
const expressLayout = require('express-ejs-layouts');
const router = require("./routes/main");

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

//Template engine
app.use(expressLayout)
app.set("layout", './layouts/main')
app.set('view engine', 'ejs')

app.use('', router)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${5000}`);
});

