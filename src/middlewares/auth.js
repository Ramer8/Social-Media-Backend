import jwt from "jsonwebtoken"

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]
    // if token is bad, blocks entry
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. No token provided",
      })
    }
    console.log("is authorized!")
    // if token works, it decodes encrypted data within token (tokendata: userId and roleName)
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.tokenData = decoded

    next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "JWT NOT VALID or malformed",
      error: error,
    })
  }
}
