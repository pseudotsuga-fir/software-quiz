export interface User {
  id: number;
  email: string;
}

export interface Quiz {
  id?: number;
  title?: string;
  questions?: Question[];
  time_limit?: string;
}

export interface Question {
  question: string;
  description?: string;
  options?: string[];
  answers?: string[];
  question_type: "multiple_choice" | "select_all" | "text";
}
