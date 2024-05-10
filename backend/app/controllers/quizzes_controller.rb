class QuizzesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :index]

  def index
    # render(json: Quiz.where(user_id: current_user.id))
    render(json: Quiz.all)
  end

  def create
    quiz = JSON.parse(quiz_params, symbolize_names: true)
    quiz[:status] = "pending"
    questions = quiz[:questions]
    quiz.delete(:questions)
    new_quiz = Quiz.create!(quiz)
    questions.each do |question|
      new_question = Question.new(question)
      new_question.quiz_id = new_quiz.id
      new_question.save!
    end
    render(json: new_quiz.with_questions)
  end

  def show
    render(json: Quiz.find(params[:id]).with_questions)
  end

  private

  def quiz_params
    params.require(:quiz)
  end
end
