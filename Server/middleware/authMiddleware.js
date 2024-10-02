const jwt = require("jsonwebtoken");
const userModel = require("../models/userModels");

const requireSignin = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN)
        req.user = decode
        next();
    } catch (error) {
        res.status(404).send({ err: error })
    }
}
const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            res.send({
                succsess: false,
                message: "unauthirized acsess"
            })
        }
        else {
            next()
        }

    } catch (error) {
        res.status(404).send({
            error,
            succsess: false,
            message: "error in this"
        })
    }
}
module.exports = { requireSignin, isAdmin }