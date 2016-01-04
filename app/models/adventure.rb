class Adventure < ActiveRecord::Base
  validates(
    :title,
    :description,
    :author_id,
    :lat,
    :lng,
    presence: true
  )

  belongs_to :user, foreign_key: :author_id

  has_many :activity_taggings
  has_many :activities, through: :activity_taggings

  has_many :user_adventures

  has_many :images

  def completed(user_id)
    if !(UserAdventure.where(completed: true,
                         adventure_id: self.id,
                         adventuree_id: user_id).empty?)
      return self
    end
  end

  def self.in_bounds(bounds)
    lat_bounds = bounds["southWest"]["lat"]..bounds['northEast']['lat']
    lng_bounds = bounds["southWest"]["lng"]..bounds['northEast']['lng']

    return Adventure.where(lat: lat_bounds, lng: lng_bounds)
  end

end
