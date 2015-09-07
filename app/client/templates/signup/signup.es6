/*****************************************************************************/
/* Signup: Event Handlers */
/*****************************************************************************/


Template.Signup.events({
  'click #signup-button': function(event) {
    let data = new ParseForm("#new-user-form"); //this function parses form into user object that can be inserted
    // do some client side validation here
    return Meteor.call('createUserNoRole', data, function(err, username) {
      if (!err) {
        Meteor.loginWithPassword(data.email, data.password);
        window.location = "/" + data.username;
      } else {
        //Insertion Error
        console.log("failure");
      }
    });
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
