class UserAdventure < ActiveRecord::Base
  validates :adventure_id, :adventuree_id, presence: true

  belongs_to :adventure
  belongs_to :user, foreign_key: :adventuree_id
end
