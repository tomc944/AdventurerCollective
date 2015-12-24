class AddIndexOnImages < ActiveRecord::Migration
  def change
    add_column :images, :adventure_id, :integer, null: false
    add_index :images, :adventure_id
  end
end
