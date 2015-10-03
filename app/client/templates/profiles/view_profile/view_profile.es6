/*****************************************************************************/
/* ViewProfile: Event Handlers */
/*****************************************************************************/
Template.ViewProfile.events({
  "click #change-profile-photo": function() {
    filepicker.pick(
      function(Blob){
        Meteor.users.update({
          _id: Meteor.user()._id
        }, {
          $set: {
            "profile.avatar_url": Blob.url
          }
        });
      }
    );
  }
});

function onUserProfile () {
  return Router.current().params.username == Meteor.user().username;
}

/*****************************************************************************/
/* ViewProfile: Helpers */
/*****************************************************************************/
Template.ViewProfile.helpers({
  profile: function() {    
    routeUser = Router.current().params.username;    
    return Meteor.users.findOne({username: routeUser}).profile;
  },
  editable: function() {
    return onUserProfile();
  }
});

/*****************************************************************************/
/* ViewProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewProfile.onCreated(function () {
  if (onUserProfile()) {
    loadFilePicker();
  }
});

Template.ViewProfile.onRendered(function () {
});

Template.ViewProfile.onDestroyed(function () {
});
