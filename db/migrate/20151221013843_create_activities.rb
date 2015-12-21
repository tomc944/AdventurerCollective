class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :pursuit, null: false
    end
  end
end
