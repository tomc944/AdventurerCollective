class SessionsController < ApplicationController

  before_action :require_no_user!, only: [:new, :create]

  def new
  end

  def create
  end

  def destroy
  end
end
