class Image < ActiveRecord::Base
  belongs_to :adventure

  validates :path, presence: true
end
