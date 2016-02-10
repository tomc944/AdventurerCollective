class Api::ImagesController < ApplicationController
  def show
    @image = Image.find(params[:id])
  end

  def create
    debugger
    @image = Image.new(image_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def index
    adventure_id = params[:adventure_id]
    @images = Image.where(adventure_id: adventure_id)
  end

  private
  def image_params
    params.require(:image).permit(:path, :adventure_id)
  end
end
