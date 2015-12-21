# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Add 7 more adventures
Adventure.create!(title: "JMT",
                 description: "Strenuous hike through the Sierras",
                 author_id: 1, lat: 36.578366, lng: -118.292068)
Adventure.create!(title: "Mt. Whitney",
                 description: "Summit of the tallest mountain in the Lower 48",
                 author_id: 1, lat: 36.586869, lng: -118.240033)
Adventure.create!(title: "Mt. Shasta",
                 description: "A great mountain to learn mountaineering",
                 author_id: 1, lat: 41.409791, lng: -122.194700)
# Add 2 more users
User.create!(username: 'tomc945',
             password_digest: "$2a$10$puRhlGJ7/3BRHcN.dzJH6ut4jNUL0H5bB008U9Yzi33y0rQWJsoKK",
             session_token: "2Fr_CaToNgmqMJbI8hDrIA")

# Add the necessary user_adventure join table (this corresponds to starred_adventures)
UserAdventure.create!(adventure_id: 1, adventuree_id: 1)
UserAdventure.create!(adventure_id: 2, adventuree_id: 1)

Activity.create!(pursuit: "Hiking")
Activity.create!(pursuit: "Biking")
Activity.create!(pursuit: "Running")
Activity.create!(pursuit: "Swimming")
Activity.create!(pursuit: "Backpacking")
Activity.create!(pursuit: "Climbing")
Activity.create!(pursuit: 'Surfing')
Activity.create!(pursuit: "Relaxation")
Activity.create!(pursuit: "Other")


ActivityTagging.create!(adventure_id: 1, activity_id: 1)
