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
    return Meteor.users.find().fetch();
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
