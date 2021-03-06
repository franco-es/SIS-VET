const express = require("express");
const router = express.Router();
const vacunaController = require("../../controllers/vacuna");
const { validate_vacuna } = require("../../middlewares/validateData");

const md_auth = require("../../middlewares/authenticated");

router.post(
  "/new/",
  [md_auth.authenticated, validate_vacuna],
  vacunaController.save
);
router.put(
  "/update",
  [md_auth.authenticated, validate_vacuna],
  vacunaController.update
);
module.exports = router;
