const express = require("express");
const userCont = require("../controllers/userController");
const adminCont = require("../controllers/adminController");
const router = express.Router();

router.post("/signup", userCont.register);
router.post("/login", userCont.login);
router.post("/classSignUp", userCont.classSignup);
router.get("/getAthletes", adminCont.getAthletes);
router.put("/updateAthlete/:id", adminCont.updateAthlete);
router.delete("/deleteAthlete/:id", adminCont.deleteAthlete);
router.get("/getAthleteDetail/:id", adminCont.getAthleteDetail);

module.exports = router;
