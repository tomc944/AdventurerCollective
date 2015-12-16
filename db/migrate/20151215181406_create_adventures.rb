class CreateAdventures < ActiveRecord::Migration
  def change
    create_table :adventures do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.text :draw, null: false
      t.string :skill, null: false
      t.string :season, null: false
      t.timestamps null: false
    end
    add_index :adventures, :author_id, unique: true
  end
end