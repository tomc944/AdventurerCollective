class Adventure < ActiveRecord::Base
  validates(
    :title,
    :description,
    :author_id,
    :draw,
    :skill,
    :season,
    presence: true
  )

  validates :author_id, uniqueness: true
end
