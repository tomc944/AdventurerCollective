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
Adventure.create!(title: "Echo Lake Rejuvenation",
                  description: "Be it hiking, swimming, or just taking in the views
                  there is a little something for everyone at this pristine lake",
                  author_id: 2, lat: 38.834653, lng: -120.043455)
Adventure.create!(title: "Mt Tam Summit Hike",
                  description: "Whether you hike, climb, or crawl to the top of
                  one of the Bay Area's premier mountains, you will be rewarded with
                  sweeping views of the city", author_id: 1, lat: 37.923543,
                  lng: -122.595913)

Adventure.create!(title: "Mt Diablo Summit Hike/Bike",
                  description: "The East Bay's premier hike/bike. You can catch sweeping
                  views of the Bay. If you aren't in the mood to get sweaty,  driving to
                  the summit is always an option", author_id: 2, lat: 37.881489,
                  lng: -121.913724)

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
UserAdventure.create!(adventure_id: 6, adventuree_id: 2)

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
ActivityTagging.create!(adventure_id: 5, activity_id: 9)

ActivityTagging.create!(adventure_id: 6, activity_id: 1)
ActivityTagging.create!(adventure_id: 6, activity_id: 3)
ActivityTagging.create!(adventure_id: 6, activity_id: 4)
ActivityTagging.create!(adventure_id: 6, activity_id: 5)
ActivityTagging.create!(adventure_id: 6, activity_id: 8)
ActivityTagging.create!(adventure_id: 6, activity_id: 9)

ActivityTagging.create!(adventure_id: 7, activity_id: 1)
ActivityTagging.create!(adventure_id: 7, activity_id: 2)
ActivityTagging.create!(adventure_id: 7, activity_id: 3)
ActivityTagging.create!(adventure_id: 7, activity_id: 5)

ActivityTagging.create!(adventure_id: 8, activity_id: 1)
ActivityTagging.create!(adventure_id: 8, activity_id: 2)
ActivityTagging.create!(adventure_id: 8, activity_id: 3)
ActivityTagging.create!(adventure_id: 8, activity_id: 8)

Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/c_scale,h_600,r_10,w_800/v1450913707/aqirv9k2zer1qgglsrtf.jpg',
              adventure_id: 1)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927114/mtwhitney_wd1fep.jpg',
              adventure_id: 2)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451928177/whitney2_ow2ep3.jpg',
              adventure_id: 2)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927220/mount_shasta_by_piarro_zxyghn.jpg',
              adventure_id: 3)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927333/santacruz_trrsn6.jpg',
              adventure_id: 4)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927408/angora_jnpaii.jpg',
              adventure_id: 5)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927534/echolake_felpcq.jpg',
              adventure_id: 6)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927598/tam_bbqsbo.jpg',
              adventure_id: 7)
Image.create!(url: 'http://res.cloudinary.com/dpdxfgx58/image/upload/v1451927690/diablo_klm5ub.jpg',
              adventure_id: 8)
