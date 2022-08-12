import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", TodoSchema);
export default Todo;
