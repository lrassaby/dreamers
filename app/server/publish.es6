Meteor.publish('Profiles', (/* args */) => {
  return Profiles.find();
});

Meteor.publish('currProfile', (data) => {
  console.log(Meteor.users.find({username: data}).fetch())
  return Meteor.users.find({username: data}, {fields: {
    '_id': true,
    'profile': true,
    'username': true
  }});
  

  
});
