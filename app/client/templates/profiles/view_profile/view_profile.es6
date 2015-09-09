/*****************************************************************************/
/* ViewProfile: Event Handlers */
/*****************************************************************************/
Template.ViewProfile.events({
});

/*****************************************************************************/
/* ViewProfile: Helpers */
/*****************************************************************************/
Template.ViewProfile.helpers({
  profile: function() {    
    return Session.get("userProfile");
  },
  editable: function() {
    console.log('huh');
    debugger;
    return this.username == Meteor.user().username;
  }
});

/*****************************************************************************/
/* ViewProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewProfile.onCreated(function () {
  routeUser = Router.current().params.username;
  userProfile = Meteor.users.find({username: routeUser}).fetch();
  Meteor.call('getUserProfile', routeUser, function(err, result) {
      Session.set("userProfile", result);
    });
});

Template.ViewProfile.onRendered(function () {
});

Template.ViewProfile.onDestroyed(function () {
});
