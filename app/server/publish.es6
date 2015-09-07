Meteor.publish('Profiles', (/* args */) => {
  return Profiles.find();
});