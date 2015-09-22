/*****************************************************************************/
/* ViewProfile: Event Handlers */
/*****************************************************************************/
Template.ViewProfile.events({
  "click #change-cover-photo": function() {
    filepicker.pick(
      function(Blob){
        console.log(Blob.url);
      }
    );
  },
  "click #change-profile-photo": function() {
    filepicker.pick(
      function(Blob){
        console.log(Blob.url);
      }
    );
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
