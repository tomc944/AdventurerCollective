class Api::ImagesController < ApplicationController
  def show
    @image = Image.find(params[:id])
  end

  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def index
    @images = Image.all
  end
  
  private
  def image_params
    params.require(:image).permit(:url, :adventure_id)
  end
end
