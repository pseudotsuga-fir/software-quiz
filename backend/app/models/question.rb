class Question < ApplicationRecord
  validates :question_type, presence: true, inclusion: { in: ["multiple_choice", "select_all", "text"] }
  # validates :answers, presence: true
  validates :question, presence: true
  belongs_to :quiz
  serialize :answers, Array, coder: YAML
  serialize :options, Array, coder: JSON
end
