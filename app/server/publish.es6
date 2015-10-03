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

Meteor.publish('wall', function (username) {
  // Show newest posts at the top
  let receiver_id = Meteor.users.findOne({username: username})._id;
  return Posts.find({receiver_id: receiver_id}, {sort: {createdAt: -1}});
});