const router = require("express").Router();
const ledgerEntriesController = require("../../controllers/ledgerEntriesController");

// Matches with "/api/ledgerentries"
router.route("/")
  .get(ledgerEntriesController.findAll)
  .post(ledgerEntriesController.create);

// Matches with "/api/ledgerentries/:id"
router
  .route("/:id")
  .get(ledgerEntriesController.findById)
  .put(ledgerEntriesController.update)
  .delete(ledgerEntriesController.remove);

module.exports = router;
