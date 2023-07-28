import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    nameCar: {
      type: String,
      require: true,
    },
    properties: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    fuel: {
      type: Number,
      require: true,
    },
    driving_mode: {
      type: String,
      require: true,
    },
    seats: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    cost: {
      type: Number,
      require: true,
    },
    heart: {
      type: Boolean,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const CarModel = mongoose.model("Car", carSchema);
export default CarModel;
