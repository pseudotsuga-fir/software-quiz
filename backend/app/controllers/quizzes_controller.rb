class QuizzesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :index]

  def index
    # render(json: Quiz.where(user_id: current_user.id))
    render(json: Quiz.all)
  end

  def create
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :description, :questions)
  end
end
