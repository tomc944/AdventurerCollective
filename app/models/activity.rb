class Activity < ActiveRecord::Base
  validates :pursuit, presence: true
  validates :pursuit, inclusion: { in: %w(Hiking Biking Running Swimming Backpacking
                                      Climbing Surfing Relaxation Other)}

  has_many :activity_taggings
  has_many :adventures, through: :activity_taggings
end
