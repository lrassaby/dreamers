/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit .login-form': function(event) {
    event.preventDefault();

    let data = new ParseForm(".login-form"); //this function parses form into user object that can be inserted
    // do some client side validation here
    Meteor.loginWithPassword(data.email, data.password);
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
