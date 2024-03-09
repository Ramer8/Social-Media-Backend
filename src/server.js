import express from "express"
import "dotenv/config"
import { dbConnection } from "./database/db.js"
import router from "./routes/router.js" // me permite cambiarle el nombre por no usar default y estar exportado por default

const app = express()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 3500

// API ROUTES

app.get("/api/healthy", (req, res) => {
  res.status(200).json({ success: true, message: "server is healthy" })
})

app.use("/api", router)

//app.use(router)
//si no pongo nada dentro cambia la ruta a => localhost:3500/auth/login

dbConnection()
  .then(() => {
    console.log("Database connected")
    app.listen(PORT, () => {
      console.log(`server is running" ${PORT}`)
    })
  })

  .catch((error) => {
    console.log(error)
  })
