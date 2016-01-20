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
    if bounds['southWest']['lng'].to_i > bounds['northEast']['lng'].to_i
      bounds['southWest']['lng'] = -180
    end

    self.where("lat < ?", bounds['northEast']['lat'])
        .where("lat > ?", bounds['southWest']['lat'])
        .where("lng > ?", bounds['southWest']['lng'])
        .where("lng < ?", bounds['northEast']['lng'])
  end
end
