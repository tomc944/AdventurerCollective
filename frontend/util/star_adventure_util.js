var StarActions = require('../actions/star_actions.js')

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
  fetchStarAdventures: function() {
    $.ajax({
      method: "GET",
      url: 'api/user_adventures',
      success: function(starred) {
        StarActions.receivedStarred(starred)
      }
    })
  },
  deleteStarred: function(id) {
    debugger
    $.ajax({
      method: "DELETE",
      url: 'api/user_adventures/' + id,
      data: {adventure_id: id},
      success: function() {}
    })
  }
}

module.exports = starAdventureUtil;
