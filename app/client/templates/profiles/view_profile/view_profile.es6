/*****************************************************************************/
/* ViewProfile: Event Handlers */
/*****************************************************************************/
Template.ViewProfile.events({
  "click #change-cover-photo": function() {
    $("#change-cover-photo-input:hidden").trigger('click');
  },
  "click #change-profile-photo": function() {
    $("#change-profile-photo-input:hidden").trigger('click');
  }
});

/*****************************************************************************/
/* ViewProfile: Helpers */
/*****************************************************************************/
Template.ViewProfile.helpers({
  profile: function() {    
    routeUser = Router.current().params.username;    
    return Meteor.users.find({username: routeUser}).fetch()[0].profile;
  },
  editable: function() {
    return Router.current().params.username == Meteor.user().username;
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
