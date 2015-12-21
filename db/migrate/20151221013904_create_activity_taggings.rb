class CreateActivityTaggings < ActiveRecord::Migration
  def change
    create_table :activity_taggings do |t|
      t.integer :activity_id, null: false
      t.integer :adventure_id, null: false
    end
    add_index :activity_taggings, :activity_id
    add_index :activity_taggings, :adventure_id
  end
end
