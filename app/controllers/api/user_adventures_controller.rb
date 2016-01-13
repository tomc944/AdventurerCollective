class UserAdventurersController < ApplicationController
  def create(user_adventurer_params)
    @user_adventure = UserAdventure.new(user_adventurer_params)
    @user_adventure[:adventuree_id] = current_user.id

    if @user_adventure.save
      render json: @user_adventure
    else
      render json: @user_adventure.errors.full_messages, status: 422
    end
  end

  private
  def user_adventurer_params
    params.require(:user_adventure).permit(:adventure_id)
  end
end
