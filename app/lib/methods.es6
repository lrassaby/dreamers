/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  // TODO: impelement user roles
  'createUserNoRole': function(data) {
    //Do server side validation
    return Accounts.createUser({
      email: data.email,
      password: data.password,
      fullname: data.fullname,
      username: data.username,
      profile: {}
    });
  }
});
