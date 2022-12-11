const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    addres: String,
    // wishlist: [{ type: ObjectId, ref: "Products" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
