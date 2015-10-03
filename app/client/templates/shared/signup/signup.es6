/*****************************************************************************/
/* Signup: Event Handlers */
/*****************************************************************************/


Template.Signup.events({
  'submit .new-user-form': function(event) {
    event.preventDefault();

    let data = new ParseForm(".new-user-form"); //this function parses form into user object that can be inserted
    // do some client side validation here

    Accounts.createUser({
      email: data.email,
      password: data.password,
      username: data.username,
      profile: {
        fullname: data.fullname
      }
    });

    // TODO: moves this server-side logic to onCreateUser callback instead
    // return Meteor.call('createUserNoRole', data, function(err, username) {
    //   if (!err) {
    //     Meteor.loginWithPassword(data.email, data.password);
    //   } else {
    //     //Insertion Error
    //     console.log(err);
    //   }
    // });
  }
});

/*****************************************************************************/
/* Signup: Helpers */
/*****************************************************************************/
Template.Signup.helpers({
});

/*****************************************************************************/
/* Signup: Lifecycle Hooks */
/*****************************************************************************/
Template.Signup.onCreated(function () {
});

Template.Signup.onRendered(function () {
});

Template.Signup.onDestroyed(function () {
});
