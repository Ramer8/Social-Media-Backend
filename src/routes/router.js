import { Router } from "express"
import authRoutes from "./auth.routes.js"
import booksRoutes from "./books.routes.js"
import usersRoutes from "./users.routes.js"

const router = Router()

// define auth route
router.use("/auth", authRoutes) //Ready Auth endpoints

// define users route

router.use("/users", usersRoutes)
// Ready :
//Get All User
//Show profile

//define books route
router.use("/books", booksRoutes)

export default router
