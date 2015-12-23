class ImageTagging < ActiveRecord::Base
  belongs_to :adventure
  belongs_to :image

  validates :adventure, :image, presence: true
  validates :image_id, uniqueness: {scope: :adventure_id} 
end
