class Api::UserAdventuresController < ApplicationController
  def create
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

  def destroy
    adventure_id = params[:adventure_id]
    @user_adventure = UserAdventure.find_by(adventure_id: adventure_id,
                                            adventuree_id: current_user.id)
    @user_adventure.destroy
    render json: @user_adventure
  end

  def update
    adventure_id = params[:adventure_id]

    @user_adventure = UserAdventure.find_by(adventure_id: adventure_id,
                                            adventuree_id: current_user.id)

    if @user_adventure.completed
      @user_adventure.update(completed: false)
    else
      @user_adventure.update(completed: true)
    end

    render json: @user_adventure
  end

  private
  def user_adventures_params
    params.require(:user_adventure).permit(:adventure_id, :completed)
  end
end
