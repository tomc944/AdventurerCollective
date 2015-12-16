# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Adventure.create!(title: "JMT",
                 description: "Strenuous hike through the Sierras",
                 author_id: 1, lat: 36.578366, lng: -118.292068)
Adventure.create!(title: "Mt. Whitney",
                 description: "Summit of the tallest mountain in the Lower 48",
                 author_id: 1, lat: 36.586869, lng: -118.240033)
Adventure.create!(title: "Mt. Shasta",
                 description: "A great mountain to learn mountaineering",
                 author_id: 1, lat: 41.409791, lng: -122.194700)
