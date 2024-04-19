class Question < ApplicationRecord
  validates :type, presence: true, inclusion: { in: ["multiple_choice", "select_all", "text",] }
  validates :answer, presence: true
  validates :question, presence: true
  belongs_to :quiz
end
