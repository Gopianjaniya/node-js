const express = require('express')
const { getSingleBook, getAll, newBook, updateBook, deleteBook } = require('../Controller/book.controller')

const bookRouter = express.Router()


// get all book
bookRouter.get('/',getAll)

// get single book
bookRouter.get('/:id',getSingleBook)

// create new book
bookRouter.post('/',newBook)

//update book
bookRouter.put('/:id',updateBook)
//Delete book
bookRouter.delete('/:id',deleteBook)

module.exports = {bookRouter}