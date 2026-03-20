import express from 'express'
import Visitor from '../models/Visitor.js'

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ success: false, message: 'Name is required' })
    }

    // 1. Find the existing visitor first
    let visitor = await Visitor.findOne({ name })

    if (visitor) {
      // 2. If visitor exists, check the time of their last visit
      const lastVisit = visitor.visits[visitor.visits.length - 1]
      const timeSinceLastVisit = Date.now() - new Date(lastVisit?.timestamp).getTime()

      // If the last visit was more than 15 seconds ago (15000 ms), record a new visit.
      // Otherwise, ignore the request to prevent double-saving from the URL/Input firing together.
      if (timeSinceLastVisit > 15000) {
        visitor.visits.push({})
        await visitor.save()
      }
    } else {
      // 3. If visitor doesn't exist, create them
      try {
        visitor = await Visitor.create({ name, visits: [{}] })
      } catch (err) {
        // Handle rare race condition where another request created the user a split second earlier
        if (err.code === 11000) visitor = await Visitor.findOne({ name })
        else throw err
      }
    }

    return res.status(200).json({ success: true, data: visitor })
  } catch (error) {
    // Pass errors to the errorHandler middleware
    next(error)
  }
})

export default router