const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    try {
        const { title, author, genre, stock, price, publishedDate } = req.body;
        const newBook = new Book({ title, author, genre, stock, price, publishedDate });
        await newBook.save();
        res.status(201).json({ message: 'Book added' });
    } catch (err) {
        console.error('adding book error', err);
        res.status(400).json({ error: 'adding book failed' });
    }
}

exports.updateStock = async (req, res) => {
    const { stock } = req.body;
    if (stock == null) {
        return res.status(400).json({ error: "Stock is required" });
    }
    if (typeof stock !== 'number' || stock < 0) {
        return res
          .status(400)
          .json({ error: "Stock must be a non-negative number" });
    }
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { stock }, { new: true , runValidators:true});
        if (!book) return res.status(404).json({ message: 'book not found' });
        res.json({message:'stock updated sucessfully', book:book});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.searchBooks = async (req, res) => {
    try {
      const { query } = req.query;
      if (!query || query.trim() === "") {
        return res.status(400).json({ error: "Search query is required" });
      }
      const regex = new RegExp(query, "i");
      const books = await Book.find({
        $or: [{ title: regex }, { author: regex }, { genre: regex }],
      });
      res.json({ results: books });
    } catch (err) {
      console.error("Search error:", err);
      res.status(500).json({ error: "Search failed" });
    }

}