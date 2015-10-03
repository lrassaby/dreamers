/*****************************************************************************/
/* ProfileDash: Event Handlers */
/*****************************************************************************/
Template.ProfileDash.events({
  "change .hero-description": function() {
    $(".story-question").css("display", "none");
  }
});

/*****************************************************************************/
/* ProfileDash: Helpers */
/*****************************************************************************/
Template.ProfileDash.helpers({
  editable: function() {
    return Router.current().params.username == Meteor.user().username;
  }
});

/*****************************************************************************/
/* ProfileDash: Lifecycle Hooks */
/*****************************************************************************/
Template.ProfileDash.onCreated(function () {
});

Template.ProfileDash.onRendered(function () {
});

Template.ProfileDash.onDestroyed(function () {
});
