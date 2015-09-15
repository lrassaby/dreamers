Meteor.publish('profile', function(username) {
  if (this.userId) {
    return Meteor.users.find({
      username: username
    }, {
      fields: {
        emails: true,
        profile: true,
        username: true
      }
    });
  }
});

Meteor.publish("directory", function () {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        emails: true,
        profile: true,
        username: true
      }
    });
  }
});