// crear el modelo en models e importarlo y luego las rutas
import Book from "../models/Book.js"

export const BooksRegister = async (req, res) => {
  try {
    const { title, description, author } = req.body

    console.log(title, description, author)
    if (!title || !description || !author) {
      return res.status(400).json({
        success: false,
        message: "title, descriptrion and author are required",
      })
    }
    const newBook = await Book.create({
      title: title,
      description: description,
      author: author,
    })

    res.status(201).json({
      success: true,
      message: "Book registered succesfully",
      data: newBook,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Book can't be registered",
      error: error,
    })
  }
}
