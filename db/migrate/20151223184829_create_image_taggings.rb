class CreateImageTaggings < ActiveRecord::Migration
  def change
    create_table :image_taggings do |t|
      t.integer :adventure_id, null: false
      t.integer :image_id, null: false
      t.timestamps
    end
    add_index :image_taggings, :adventure_id
    add_index :image_taggings, :image_id
    add_index :image_taggings, [:adventure_id, :image_id], unique: true
  end
end
