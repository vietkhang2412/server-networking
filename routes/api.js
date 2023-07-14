var express = require("express");

var router = express.Router();

var api_u = require("../controllers/api/api-users");
var api_s = require("../controllers/api/api-smartphone");

//user
router.get("/users", api_u.getUser);
router.post("/users", api_u.addUser);
// router.put("/update-user/:idu", api_b.updateBook);
// router.delete("/delete-user/:idu", api_b.deleteBook);

//Smart phone
router.get("/smart-phone", api_s.getSmartPhone);
router.post("/smart-phone", api_s.addSmartPhone);
router.put("/update-phone/:ids", api_s.updateSmartPhone);
router.delete("/delete-phone/:ids", api_s.deleteSmartPhone);

module.exports = router;
