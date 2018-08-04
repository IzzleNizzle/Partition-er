const router = require("express").Router();
const ledgersController = require("../../controllers/ledgersController");

// Matches with "/api/ledgers"
router.route("/")
  .get(ledgersController.findAll)
  .post(ledgersController.create);

// Matches with "/api/ledgers/:id"
router
  .route("/:id")
  .get(ledgersController.findById)
  .put(ledgersController.update)
  .delete(ledgersController.remove);

module.exports = router;
