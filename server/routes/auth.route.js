const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user.model.js')




// REGISTER
router.post('/register', async (req, res) => {


    // hash password before saving to db
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)



    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })



    try {
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json(err)
    }
})




// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(404).json("User not found")


        // compare password is valid or not
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).json("Wrong password")


        // after everything ok (login success), assign user a jwt token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, { expiresIn: "90d"})




        // send user other than password
        const { password, ...others } = user._doc
        res.status(200).json({...others, token})

    } catch (err) {
        res.status(500).json(err)
    }

})


module.exports = router