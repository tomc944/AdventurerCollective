# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Adventure.create!(title: "John Muir Trail",
                  description: "Strenuous hike through the Sierras",
                  author_id: 1, lat: 36.578366, lng: -118.292068)
Adventure.create!(title: "Mt. Whitney summit Tag",
                  description: "Summit of the tallest mountain in the Lower 48",
                  author_id: 1, lat: 36.586869, lng: -118.240033)
Adventure.create!(title: "Mt. Shasta summit through Avalanche Gulch",
                  description: "A great mountain to learn mountaineering",
                  author_id: 1, lat: 41.409791, lng: -122.194700)
Adventure.create!(title: "Day of Relaxation at the Santa Cruz Boardwalk",
                  description: "A plethora of surfing, swimming, and beach relaxation",
                  author_id: 1, lat: 36.96333, lng: -122.018022)
Adventure.create!(title: "Angora Lakes Cliff Jumping",
                  description: "Not an activity for the faint of heart but a fun
                  crazy adventure for the thrill seeker", author_id: 2,
                  lat: 38.863445, lng: -120.066519)

User.create!(username: 'tomc945',
             password_digest: "$2a$10$puRhlGJ7/3BRHcN.dzJH6ut4jNUL0H5bB008U9Yzi33y0rQWJsoKK",
             session_token: "2Fr_CaToNgmqMJbI8hDrIA")

User.create!(username: "demouser",
             password_digest: "$2a$10$yY6Vk0HBIZLxnbK5wBuHKelpvpUMXEiS2i6LthT0x0hP9JOBSRrvy",
             session_token: "yOSoHU3meZjf2DFdbRTJaA")

# Add the necessary user_adventure join table (this corresponds to starred_adventures)
UserAdventure.create!(adventure_id: 1, adventuree_id: 1)
UserAdventure.create!(adventure_id: 2, adventuree_id: 1, completed: true)

UserAdventure.create!(adventure_id: 1, adventuree_id: 2, completed: true)
UserAdventure.create!(adventure_id: 2, adventuree_id: 2)
UserAdventure.create!(adventure_id: 3, adventuree_id: 2)
UserAdventure.create!(adventure_id: 4, adventuree_id: 2, completed: true)
UserAdventure.create!(adventure_id: 5, adventuree_id: 2, completed: true)


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
ActivityTagging.create!(adventure_id: 1, activity_id: 3)
ActivityTagging.create!(adventure_id: 1, activity_id: 5)

ActivityTagging.create!(adventure_id: 2, activity_id: 1)
ActivityTagging.create!(adventure_id: 2, activity_id: 3)

ActivityTagging.create!(adventure_id: 3, activity_id: 1)
ActivityTagging.create!(adventure_id: 2, activity_id: 9)

ActivityTagging.create!(adventure_id: 4, activity_id: 4)
ActivityTagging.create!(adventure_id: 4, activity_id: 7)
ActivityTagging.create!(adventure_id: 4, activity_id: 8)
ActivityTagging.create!(adventure_id: 4, activity_id: 9)

ActivityTagging.create!(adventure_id: 5, activity_id: 1)
ActivityTagging.create!(adventure_id: 5, activity_id: 4)
ActivityTagging.create!(adventure_id: 5, activity_id: 6)
ActivityTagging.create!(adventure_id: 5, activity_id: 9 )
