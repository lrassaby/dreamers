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
    routeUser = Router.current().params.username;    
    return Meteor.users.find({username: routeUser}, {fields: {'profile': true}}).fetch()[0].profile;
  },
  editable: function() {
    debugger;
    return this.username == Meteor.user().username;
  }
});

/*****************************************************************************/
/* ViewProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewProfile.onCreated(function () {

});

Template.ViewProfile.onRendered(function () {
});

Template.ViewProfile.onDestroyed(function () {
});
