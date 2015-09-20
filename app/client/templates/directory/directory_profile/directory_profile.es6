/*****************************************************************************/
/* DirectoryProfile: Event Handlers */
/*****************************************************************************/
Template.DirectoryProfile.events({
  "click .directory-profile": function() {
    window.location = this.username;
  }
});

/*****************************************************************************/
/* DirectoryProfile: Helpers */
/*****************************************************************************/
Template.DirectoryProfile.helpers({
});

/*****************************************************************************/
/* DirectoryProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.DirectoryProfile.onCreated(function () {
});

Template.DirectoryProfile.onRendered(function () {
});

Template.DirectoryProfile.onDestroyed(function () {
});
