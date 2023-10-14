export interface Question {
    q_difficulty: "easy" | "medium" | "hard";
    q_question: string;
    q_options: {
      option: string;
      correct: boolean;
    }[];
    correctOptionIndex: number;
    q_id?: string;
  }