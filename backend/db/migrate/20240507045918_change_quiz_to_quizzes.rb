class ChangeQuizToQuizzes < ActiveRecord::Migration[7.1]
  def change
    rename_table(:quiz, :quizzes)
    rename_table(:question, :questions)
  end
end
