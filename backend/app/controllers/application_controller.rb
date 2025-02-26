class ApplicationController < ActionController::API
  def ping
    render json: { message: "Hello from Rails!"}
  end
end
