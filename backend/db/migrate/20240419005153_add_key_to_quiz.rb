class AddKeyToQuiz < ActiveRecord::Migration[7.1]
  def change
    add_column :quiz, :key, :string
    add_index :quiz, :key, unique: true
  end
end
