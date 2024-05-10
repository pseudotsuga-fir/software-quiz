class Quiz < ApplicationRecord
  validates :status, presence: true, inclusion: { in: ["pending", "active", "expired", "completed"] }
  has_many :questions

  def with_questions
    self.attributes.merge({ questions: self.questions })
  end
end
