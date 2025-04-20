const express = require("express");
const { checkAuth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", checkAuth, async (req, res) => {
  if (!req.user) return res.redirect("/login");
  return res.render("home", {
    name:req.user ? req.user.name : null
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
