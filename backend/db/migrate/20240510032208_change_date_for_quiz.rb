class ChangeDateForQuiz < ActiveRecord::Migration[7.1]
  def self.up
    change_table(:quizzes) do |t|
      t.change(:time_limit, :string)
    end
  end

  def self.down
    change_table(:quizzes) do |t|
      t.change(:time_limit, :time)
    end
  end
end
