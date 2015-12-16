class StaticPagesController < ApplicationController
  def root
    debugger
    redirect_to new_session_url unless logged_in?
  end
end
