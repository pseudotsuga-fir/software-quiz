class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionsFix
  respond_to :json

  private

  def respond_with(current_user, _opts = {})
    if resource.persisted?
      render(json: {
        status: { code: 200, message: "Registered!" },
        data: current_user,
      })
    else
      render(json: {
        status: { message: "Error registering. #{current_user.errors.full_messages.to_sentence}" },
      }, status: :unprocessable_entity)
    end
  end
end
