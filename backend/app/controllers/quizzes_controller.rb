class QuizzesController < ApplicationController
  before_action :authenticate_user!

  def index
    byebug
    render(json: Quiz.all)
  end
end
