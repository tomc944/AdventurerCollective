class CreateUserAdventures < ActiveRecord::Migration
  def change
    create_table :user_adventures do |t|
      t.integer :adventure_id, null: false
      t.integer :adventuree_id, null: false
      t.boolean :completed, default: false, null: false
      t.timestamps null: false
    end
    add_index :user_adventures, :adventuree_id
    add_index :user_adventures, :adventure_id
  end
end
