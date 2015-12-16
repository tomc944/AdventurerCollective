class Api::AdventuresController < ApplicationController
  def index
    @adventures = Adventure.all
  end

  def create
    @adventure = Adventure.new(adventure_params)
    if @adventure.save
      render json: @adventure
    else
      render json: @advevnture.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  private
  def adventure_params
    params.require(:adventure).permit(:title, :description, :lat, :lng)
  end
end
