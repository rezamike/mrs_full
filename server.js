const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/family_controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
