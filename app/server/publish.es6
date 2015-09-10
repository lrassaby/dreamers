Meteor.publish('Profiles', (/* args */) => {
  return Profiles.find();
});

Meteor.publish('currProfile', (data) => {
  return Meteor.users.find({username: data});
});