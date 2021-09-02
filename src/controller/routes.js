const express = require("express");
const router = express.Router();
const Controller = require("./task");

router.get("/", Controller.dashboardGet);
router.post("/", Controller.dashboardPost);
router.get("/comment/:id", Controller.commentGet);
router.post("/comment/:id", Controller.commentPost);
router.get("/delete/:id", Controller.deleteGet);

module.exports = router;
