import { Router } from "express"
import authRoutes from "./auth.routes.js"
import booksRoutes from "./books.routes.js"
import usersRoutes from "./users.routes.js"

const router = Router()

// define auth route
router.use("/auth", authRoutes)

// define users route

router.use("/users", usersRoutes)

//define books route
router.use("/books", booksRoutes)

// router.use("/books", booksRoutes)

//define post route
// router.use("/post", postRoutes)

export default router
