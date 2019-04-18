import mongoose from 'mongoose'

const TweetSchema = new mongoose.Schema( {
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
} )

export default mongoose.model( 'Tweet', TweetSchema )