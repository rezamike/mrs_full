const express = require("express");
const router = express.Router();
const family = require("../models/family_model.js");

router.get("/api", (req, res) => {
  res.redirect("/api/user");
});

router.get("/api/user", (req, res) => {
  family.all((response) => {
    console.log(response);
  });
});

router.put("/api/user", (req, res) => {
    let cleanString = `"${req.body[0]}", "${req.body[1]}"`;
  family.create(cleanString, (result) => {
    res.redirect("/api/user");
  });
});

module.exports = router;
