class Quiz < ApplicationRecord
  validates :status, presence: true, inclusion: { in: ["pending", "active", "expired", "completed"] }
  has_many :questions
end
