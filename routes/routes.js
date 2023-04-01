const express = require("express");
const router = express.Router();

const {
  getallmovies,
  getallmoviestest,
  getalltests,
} = require("../controllers/controllers");

router.route("/").get(getallmovies);
router.route("/test").get(getallmoviestest);
router.route("/testall").get(getalltests);

module.exports = router;
