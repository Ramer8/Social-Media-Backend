import { Router } from "express"
import authRoutes from "./auth.routes.js"
import booksRoutes from "./books.routes.js"

const router = Router()

// define auth route
router.use("/auth", authRoutes)

//define books route
router.use("/books", booksRoutes)

export default router
