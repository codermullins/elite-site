const express = require("express");
const adminCont = require("../controllers/adminController");
const router = express.Router();

router.get("/", adminCont.getEvents);
router.get("/getAllEvents", adminCont.getEvents);
router.post("/addEvent", adminCont.postAddEvent);
router.delete("/deleteEvent/:id", adminCont.deleteEvent);
router.put("/updateEvent/:id", adminCont.postUpdateEvent);
router.get("/getEvent/:id", adminCont.getEvent);

module.exports = router;
