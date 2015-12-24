class DeleteImageTaggings < ActiveRecord::Migration
  def change
    drop_table :image_taggings
  end
end
