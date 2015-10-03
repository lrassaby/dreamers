/*****************************************************************************/
/* Wall: Event Handlers */
/*****************************************************************************/
Template.Wall.events({
});

/*****************************************************************************/
/* Wall: Helpers */
/*****************************************************************************/
Template.Wall.helpers({
  "wall_posts": function() {
    return Posts.find({"receiver_id": Meteor.users.findOne({username: Router.current().params.username})._id}, {sort: {createdAt: -1}});
  }
});

/*****************************************************************************/
/* Wall: Lifecycle Hooks */
/*****************************************************************************/
Template.Wall.onCreated(function () {
});

Template.Wall.onRendered(function () {
});

Template.Wall.onDestroyed(function () {
});
