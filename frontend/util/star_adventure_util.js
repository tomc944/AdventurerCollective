var StarActions = require('../actions/star_actions.js')

var starAdventureUtil = {
  createStarred: function(user_adventure) {
    debugger;
    $.ajax({
      method: 'POST',
      url: 'api/user_adventures',
      data: {user_adventure: user_adventure},
      success: function(newStarred) {
        debugger;
        StarActions.receivedStarred(newStarred);
      }
    });
  }
}

module.exports = starAdventureUtil;
