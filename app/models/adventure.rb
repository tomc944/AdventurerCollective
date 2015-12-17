class Adventure < ActiveRecord::Base
  validates(
    :title,
    :description,
    :author_id,
    :lat,
    :lng,
    presence: true
  )

  def self.in_bounds(bounds)
    lat_bounds = bounds["southWest"]["lat"]..bounds['northEast']['lat']
    lng_bounds = bounds["southWest"]["lng"]..bounds['northEast']['lng']

    return Adventure.where(lat: lat_bounds, lng: lng_bounds)
  end

  # validates :author_id, uniqueness: true
end
