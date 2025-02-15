import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ msg: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    user = new User({ email, password: hashedPassword })
    await user.save()

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' })
    res.status(201).json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
})

export default router
