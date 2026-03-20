import Visitor from '../models/Visitor.js'

export const createVisitor = async (req, res, next) => {
  try {
    const { name } = req.body

    if (!name || name.trim() === '') {
      return res.status(400).json({ success: false, message: 'Name is required' })
    }

    // Allow duplicate names - no uniqueness constraint
    const visitor = new Visitor({
      name: name.trim(),
    })

    await visitor.save()

    res.status(201).json({
      success: true,
      message: 'Visitor recorded successfully',
      data: visitor,
    })
  } catch (error) {
    next(error)
  }
}

export const getAllVisitors = async (req, res, next) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      data: visitors,
      count: visitors.length,
    })
  } catch (error) {
    next(error)
  }
}
