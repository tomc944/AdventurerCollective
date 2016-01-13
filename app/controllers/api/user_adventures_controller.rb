class Api::UserAdventuresController < ApplicationController
  def create
    debugger
    @user_adventure = UserAdventure.new(user_adventures_params)
    @user_adventure[:adventuree_id] = current_user.id

    if @user_adventure.save
      render json: @user_adventure
    else
      render json: @user_adventure.errors.full_messages, status: 422
    end
  end

  def index
    @user_adventures = UserAdventure.where(adventuree_id: current_user.id)
  end

  private
  def user_adventures_params
    params.require(:user_adventure).permit(:adventure_id)
  end
end
