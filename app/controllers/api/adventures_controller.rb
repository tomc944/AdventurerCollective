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

    @adventure.activity_ids.each do |activity_id|
      @adventure.activity_taggings.create(activity_id: activity_id)
    end

    if @adventure.save
      render json: @adventure
    else
      render json: @advevnture.errors.full_messages, status: 422
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
    # activiy ids in a hash : []
    # look at 99 cats solutions
    # look at reddit solution
    params.require(:adventure).permit(:title, :description, :lat, :lng,
                                      {activity_ids: []})
  end
end
