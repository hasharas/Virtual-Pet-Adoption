import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      age: {
            type: Number,
            required: true,
      },
      species: {
            type: String,
            required: true,
      },
      personality: {
            type: String,
            required: true,
      },
      mood: {
            type: String,
            required: true,
      },
      adopted: {
            type: Boolean,
            default: false,
      },
      adoption_date: {
            type: Date,
            default: null,
      },
      createdAt:
      {
            type: Date,
            default: Date.now
      }


})

const Pet = mongoose.model('Pet', petSchema);
export default Pet;