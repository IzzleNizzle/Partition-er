const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const ledgerRoutes = require("./ledgers");
const ledgerEntryRoutes = require("./ledgerentries");

// Book routes
router.use("/books", bookRoutes);

// User routes
router.use("/users", userRoutes);

// Ledger routes
router.use("/ledgers", ledgerRoutes);

// Ledger Entries routes
router.use("/ledgerentries", ledgerEntryRoutes);

module.exports = router;
