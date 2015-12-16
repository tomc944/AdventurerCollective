class StaticPagesController < ApplicationController
  def root
    debugger
    unless logged_in?
      redirect_to new_session_url
    end
  end
end
