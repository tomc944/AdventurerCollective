var StarActions = require('../actions/star_actions.js');
var UserActions = require('../actions/user_actions');
var userUtil = require('./user_api_util');

var starAdventureUtil = {
  createStarred: function(user_adventure) {
    $.ajax({
      method: 'POST',
      url: 'api/user_adventures',
      data: {user_adventure: user_adventure},
      success: function(newStarred) {
        StarActions.receivedStarred(newStarred);
      }
    });
  },
  editStarred: function(id, completed) {
    $.ajax({
      method: 'PATCH',
      url: 'api/user_adventures/' + id,
      data: {adventure_id: id, completed: completed},
      success: function(editStarred) {
        StarActions.editStarred(editStarred)
        userUtil.fetchUser();
      }
    })
  },
  fetchStarAdventures: function() {
    $.ajax({
      method: "GET",
      url: 'api/user_adventures',
      success: function(starred) {
        StarActions.receivedAllStarred(starred)
      }
    })
  },
  deleteStarred: function(id) {
    $.ajax({
      method: "DELETE",
      url: 'api/user_adventures/' + id,
      data: {adventure_id: id},
      success: function(starred) {
        StarActions.deleteStarred(starred)
      }
    })
  }
}

module.exports = starAdventureUtil;
