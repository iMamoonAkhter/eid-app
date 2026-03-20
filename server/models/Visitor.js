import mongoose from 'mongoose'

const visitorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true // Ensures no duplicate names are ever created
  },
  visits: [{
    timestamp: {
      type: Date,
      default: Date.now // Automatically sets the date and time
    }
  }]
}, { timestamps: true })

export default mongoose.model('Visitor', visitorSchema)