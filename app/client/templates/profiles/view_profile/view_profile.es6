/*****************************************************************************/
/* ViewProfile: Event Handlers */
/*****************************************************************************/
Template.ViewProfile.events({
});

/*****************************************************************************/
/* ViewProfile: Helpers */
/*****************************************************************************/
Template.ViewProfile.helpers({
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
