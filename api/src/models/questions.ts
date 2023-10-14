import { Schema, model } from "mongoose";
import { Question } from "app/interfaces/question.interface"

const QuestionSchema = new Schema<Question>({
  q_difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  q_question: {
    type: String,
    required: true,
  },
  q_options: [
    {
      option: { type: String, required: true },
      correct: { type: Boolean, required: true },
    },
    {
      option: { type: String, required: true },
      correct: { type: Boolean, required: true },
    },
    {
      option: { type: String, required: true },
      correct: { type: Boolean, required: true },
    },
  ],
  correctOptionIndex: {
    type: Number,
    required: true,
  },
});

QuestionSchema.methods.toJSON = function () {
  const { __v, _id, ...question } = this.toObject();
  question.q_id = _id;
  return question;
};

export default model("Question", QuestionSchema);