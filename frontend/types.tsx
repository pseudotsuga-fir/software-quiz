export interface User {
  id: number;
  email: string;
}

export interface Quiz {
  id?: number;
  title?: string;
  questions?: Question[];
  time_limit?: Date;
}

export interface Question {
  question: string;
  description?: string;
  options?: string[];
  answers?: string[];
  type: "multiple_choice" | "select_all" | "text";
}
