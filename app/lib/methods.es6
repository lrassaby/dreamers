/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  // TODO: implement user roles
  'createUserNoRole': function(data) {
    //Do server side validation
    return Accounts.createUser({
      email: data.email,
      password: data.password,
      username: data.username,
      profile: {
        fullname: data.fullname
      }
    });
  }
});
