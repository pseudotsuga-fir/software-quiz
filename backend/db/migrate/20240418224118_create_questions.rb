class CreateQuestions < ActiveRecord::Migration[7.1]
  def change
    create_table :question do |t|
      t.references :quiz, foreign_key: true
      t.string :question
      t.string :description
      t.string :options
      t.string :answer
      t.string :type
      t.timestamps
    end
  end
end
