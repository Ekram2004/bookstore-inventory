const express = require('express');
const { addBook, updateStock, searchBooks } = require('../controllers/bookControllers');

const router = express.Router();

router.post("/books", addBook);
router.put("/books", updateStock);
router.get("/books", searchBooks);

module.exports = router;



