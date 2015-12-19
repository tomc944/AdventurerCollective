var UserActions = require('../actions/user_actions');

var UserApiUtils = {
  fetchUser: function() {
    $.ajax({
      url: "/current_user",
      type: "GET",
      success: function (user) {
        UserActions.receiveUser(user);
      }
    });
  }
};

module.exports = UserApiUtils;
