class Image < ActiveRecord::Base
  has_many :image_taggings
  has_many :adventures, through: :image_taggings

  validates :url, presence: true
end
