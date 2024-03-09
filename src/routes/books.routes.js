import { Router } from "express"
import { BooksRegister } from "../controllers/books.controllers.js"

const router = Router()

router.post("/register", BooksRegister)
// route.post('/show', getBooks )

export default router

// import { Router } from "express"
// import { login, register } from "../controllers/auth.controller.js"

// const router = Router()

// router.post("/register", register)
// router.post("/login", login)

// export default router
