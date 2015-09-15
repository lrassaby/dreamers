/*****************************************************************************/
/* DirectoryPage: Event Handlers */
/*****************************************************************************/
Template.DirectoryPage.events({
});

/*****************************************************************************/
/* DirectoryPage: Helpers */
/*****************************************************************************/
Template.DirectoryPage.helpers({
  profiles: function() {      
    // TODO: move this logic to server side
    return _.map(Meteor.users.find().fetch(), (u) => u.profile);
  }
});

/*****************************************************************************/
/* DirectoryPage: Lifecycle Hooks */
/*****************************************************************************/
Template.DirectoryPage.onCreated(function () {
});

Template.DirectoryPage.onRendered(function () {
});

Template.DirectoryPage.onDestroyed(function () {
});
