class Image < ActiveRecord::Base
  belongs_to :adventure

  validates :url, presence: true
end
