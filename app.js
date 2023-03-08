//internal node packages
const path = require("path");

//external node packages
require("dotenv").config();
const express = require("express");
const swaggerUI = require("swagger-ui-express");

//other imports
const swaggerDoc = require("./json/swagger.json");

//app settings
const app = express();
app.set("view engine", "ejs");
app.set("views", "views"); 


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, (req) => {
  console.log("Server Up at", port);
});
