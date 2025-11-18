const { default: mongoose } = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishingDate: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    stock: {
      type: Number,
      default: 5,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    isSoldOut: {
      type: Boolean,
      default: false,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

BookSchema.virtual("outOfStockBadge").get(() => {
  if (this.stock == 0) return true;

  return false;
});
const BookModel = mongoose.model("book1", BookSchema);

module.exports = { BookModel };
