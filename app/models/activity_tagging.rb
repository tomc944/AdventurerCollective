class ActivityTagging < ActiveRecord::Base
  validates :activity_id, :adventure_id, presence: true

  belongs_to :adventure
  belongs_to :activity
end
