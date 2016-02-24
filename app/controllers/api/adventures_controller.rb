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
      Image.create!(adventure_id: @adventure.id, path: params['adventure']['path'])
      render json: @adventure
    else
      redirect_to new_api_adventure_url
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
      :title, :description, :lat, :lng, activity_ids: [],
      image_ids: [])
  end
end
