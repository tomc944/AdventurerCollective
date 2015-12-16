class Adventure < ActiveRecord::Base
  validates(
    :title,
    :description,
    :author_id,
    :lat,
    :lng,
    presence: true
  )

  validates :author_id, uniqueness: true
end
