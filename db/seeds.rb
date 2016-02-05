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

Adventure.create!(title: "Esalen Institute Hot Springs Soak",
                  description: "An extremely relaxing and awe-inspiring hot springs location
                  built into seaside cliffs. Esalen Institute is a place to relax, recharge,
                  and take time to osak your tired body", author_id: 2, lat: 36.122806,
                  lng: -121.636185)

Adventure.create!(title: "Mt. Hood Skiing and Mountaineering",
                  description: "There are so many adventure options on Mt. Hood. You can
                  be there in the winter to do mountaineering or skiing, or you can come
                  back in the summer and hike around the mountain. If you just want to be
                  in a beautiful situation, enjoy a couple of beers at Timberline Lodge",
                  author_id: 1, lat: 45.331196, lng: -121.711459)

Adventure.create!(title: "Zion National Park",
                  description: "This national park is a climbing and hiking mecca. Zion
                  is well known for its Navajo Sandstore, a brilliant rock featuring
                  hues of red, orange, yellow, and brown. Some of the best crack-climbing
                  in the world exists in this varied canyon", author_id: 2, lat: 37.297955,
                  lng:  -113.014892)

Adventure.create!(title: "Mt Jefferson",
                  description: "This mountain is typically forgotten in the shadow of Oregon's
                  taller peak, Mt Hood, but it's not less impressive. Mt Jefferson provides
                  hikers with beautiful, remote hiking. There are many impressive, small lakes
                  a couple of thousand feet below the summit that are teeming with fish",
                  author_id: 1, lat: 44.656208, lng: -121.785827)

Adventure.create!(title: "Lost Coast",
                  description: "California natives are quick to forget about the Lost Coast.
                  This area is mostly a natural and development-free area miles off from Route
                  1. The Lost Coast is an austere and beautiful location that is not very well
                  traveled. Expect incredibly difficult and rewarding backpacking", author_id: 2,
                  lat: 40.434813, lng: -124.403366)

Adventure.create!(title: "Bryce Canyon",
                  description: "Another beautiful southern Utah park which rewards visitors
                  with towering spires called hoodoos which were formed by frost weathering
                  and stream erosion. Bryce Canyon's rim sits between 8000 and 9000 ft",
                  author_id: 1, lat: 37.592800, lng: -112.187025)

Adventure.create!(title: "Goat Rocks Wilderness",
                  description: "This wilerness area is nestled in the Cascade Mountain Range
                  north of Mt. Adams and south of Mt. Rainier. This area is frequented by mountain
                  goats and long-distance thru hikers on the Pacific Crest Trail. Hikers who
                  make it the ridgeline, named Knife's Edge, are rewarded with sweeping panorama
                  views of the Cascade Mountains", author_id: 2, lat: 46.534976, lng: -121.455686)

Adventure.create!(title: "Tunnel Falls",
                  description: "There are a plethora of waterfalls right near the Columbia River.
                  You can do a day hike and explore all of the waterfalls very easily or if you
                  are in the mood for a more involved adventure, you can backpack all the way to
                  Mt. Hood in a couple of days", author_id: 1, lat: 45.634644, lng: -121.920666)

Adventure.create!(title: "Oregon Desert Trail",
                  description: "This 800-mile route is not for the unitiated backpacker. Certain
                  sections of this desert route are bone-dry and incredibly remote, so one must
                  proceed with extreme caution. Make sure to cache water accordingly and understand
                  how to use a GPS. If you are prepared to take on the challenged, you will witness
                  the Central Oregon Volcanics, West Basin, East Basin, and the Owyhee Canyonlands",
                  author_id: 2, lat: 44.04554, lng: -121.03805)

Adventure.create!(title: "Crater Lake National Park",
                  description: "The only National Park in Oregon is home to the deepest lake
                  in the country with a depth of ~2000 feet. There are no rivers flowing in
                  or out of this lake. Crater Lake is a sight for sore-eyes and on very clear
                  days you can see Mt. Thielsen in the background. Crater Lake is a great visit
                  even for the more sedentary travelers as all of the lake can be accessed by car",
                  author_id: 1, lat: 42.868166, lng: -122.168629)

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

ActivityTagging.create!(adventure_id: 9, activity_id: 4)
ActivityTagging.create!(adventure_id: 9, activity_id: 8)
ActivityTagging.create!(adventure_id: 9, activity_id: 9)

ActivityTagging.create!(adventure_id: 10, activity_id: 1)
ActivityTagging.create!(adventure_id: 10, activity_id: 5)
ActivityTagging.create!(adventure_id: 10, activity_id: 8)
ActivityTagging.create!(adventure_id: 10, activity_id: 9)

ActivityTagging.create!(adventure_id: 11, activity_id: 1)
ActivityTagging.create!(adventure_id: 11, activity_id: 3)
ActivityTagging.create!(adventure_id: 11, activity_id: 5)

ActivityTagging.create!(adventure_id: 12, activity_id: 1)
ActivityTagging.create!(adventure_id: 12, activity_id: 3)
ActivityTagging.create!(adventure_id: 12, activity_id: 5)
ActivityTagging.create!(adventure_id: 12, activity_id: 8)
ActivityTagging.create!(adventure_id: 12, activity_id: 9)

ActivityTagging.create!(adventure_id: 13, activity_id: 1)
ActivityTagging.create!(adventure_id: 13, activity_id: 3)
ActivityTagging.create!(adventure_id: 13, activity_id: 4)
ActivityTagging.create!(adventure_id: 13, activity_id: 5)
ActivityTagging.create!(adventure_id: 13, activity_id: 7)
ActivityTagging.create!(adventure_id: 13, activity_id: 8)

ActivityTagging.create!(adventure_id: 14, activity_id: 1)
ActivityTagging.create!(adventure_id: 14, activity_id: 3)
ActivityTagging.create!(adventure_id: 14, activity_id: 5)

ActivityTagging.create!(adventure_id: 15, activity_id: 1)
ActivityTagging.create!(adventure_id: 15, activity_id: 3)
ActivityTagging.create!(adventure_id: 15, activity_id: 4)
ActivityTagging.create!(adventure_id: 15, activity_id: 5)

ActivityTagging.create!(adventure_id: 16, activity_id: 1)
ActivityTagging.create!(adventure_id: 16, activity_id: 3)
ActivityTagging.create!(adventure_id: 16, activity_id: 4)
ActivityTagging.create!(adventure_id: 16, activity_id: 5)

ActivityTagging.create!(adventure_id: 17, activity_id: 5)
ActivityTagging.create!(adventure_id: 17, activity_id: 9)

ActivityTagging.create!(adventure_id: 18, activity_id: 1)
ActivityTagging.create!(adventure_id: 18, activity_id: 4)
ActivityTagging.create!(adventure_id: 18, activity_id: 5)
ActivityTagging.create!(adventure_id: 18, activity_id: 8)
ActivityTagging.create!(adventure_id: 18, activity_id: 9)

Image.create!(path: 'aqirv9k2zer1qgglsrtf.jpg',
              adventure_id: 1)
Image.create!(path: 'mtwhitney_wd1fep.jpg',
              adventure_id: 2)
Image.create!(path: 'whitney2_ow2ep3.jpg',
              adventure_id: 2)
Image.create!(path: 'mount_shasta_by_piarro_zxyghn.jpg',
              adventure_id: 3)
Image.create!(path: 'santacruz_trrsn6.jpg',
              adventure_id: 4)
Image.create!(path: 'angora_jnpaii.jpg',
              adventure_id: 5)
Image.create!(path: 'echolake_felpcq.jpg',
              adventure_id: 6)
Image.create!(path: 'tam_bbqsbo.jpg',
              adventure_id: 7)
Image.create!(path: 'diablo_klm5ub.jpg',
              adventure_id: 8)
Image.create!(path: 'esalen_mwu3fp.jpg',
              adventure_id: 9)
Image.create!(path: 'mthood_wvpedz.jpg',
              adventure_id: 10)
Image.create!(path: 'zion_vfkap0.jpg',
              adventure_id: 11)
Image.create!(path: 'jefferson_cz4zw3.jpg',
              adventure_id: 12)
Image.create!(path: 'Lost_Coast_Trail_jjfodm.jpg',
              adventure_id: 13)
Image.create!(path: 'bryce_ohwvsn.jpg',
              adventure_id: 14)
Image.create!(path: 'goatrocks_co4ppx.jpg',
              adventure_id: 15)
Image.create!(path: 'tunnelfalls_atayrk.jpg',
              adventure_id: 16)
Image.create!(path: 'oregondesert_bxewgk.jpg',
              adventure_id: 17)
Image.create!(path: 'craterlake_cwrnpy.jpg',
              adventure_id: 18)
