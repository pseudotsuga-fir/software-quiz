class ApplicationController < ActionController::API
  def authenticate
    raise ApplicationController::UnauthorizedError unless request.headers["X-API-Key"] == ENV["API_KEY"]
  end
end
