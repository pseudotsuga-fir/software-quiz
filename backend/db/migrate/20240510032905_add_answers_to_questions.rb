class AddAnswersToQuestions < ActiveRecord::Migration[7.1]
  def change
    add_column(:questions, :answers, :text, default: [].to_yaml)
    remove_column(:questions, :answer, :string)
  end
end
