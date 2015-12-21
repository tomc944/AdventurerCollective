class ActivityTagging < ActiveRecord::Base
  belongs_to :adventure
  belongs_to :activity

  validates :adventure, :activity, presence: true
  validates :activity_id, uniqueness: {scope: :adventure_id}
end
