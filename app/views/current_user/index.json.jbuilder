json.extract! @user, :id, :username

json.authored_adventures do
  json.array! @user.authored_adventures do |authored_adventure|
    json.title authored_adventure.title
    json.taggings authored_adventure.activities
  end
end

json.starred_adventures do
  json.array! @user.starred_adventures do |starred_adventures|
    json.title starred_adventures.title
    json.taggings starred_adventures.activities
  end
end

json.user_adventures do
  json.array! @user.user_adventures do |user_adventure|
    json.adventure_id user_adventure.adventure_id
    json.adventuree_id user_adventure.adventuree_id
    json.completed user_adventure.completed
  end
end
