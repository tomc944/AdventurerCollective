class ChangeImageColumns < ActiveRecord::Migration
  def change
    rename_column :images, :url, :path
  end
end
