class Api::AdventuresController < ApplicationController
  def index
    if (params[:params])
      @adventures = Adventure.in_bounds(params[:params])
    else
      @adventures = Adventure.all
    end
  end

  def create
    @adventure = Adventure.new(adventure_params)
    @adventure[:author_id] = current_user.id

    if @adventure.save
      render json: @adventure
    else
      render json: @adventure.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  def show
    @adventure = Adventure.find(params[:id])
  end

  private
  def adventure_params
    params.require(:adventure).permit(
      :title, :description, :lat, :lng, activity_ids: []
      :image_ids: [])
  end
end
