/*****************************************************************************/
/* CreatePost: Event Handlers */
/*****************************************************************************/
Template.CreatePost.events({
  "click #create-post-submit": function (event) {
    event.preventDefault();
    let text = $("#create-post-input").val();
    
    if (!_.isEmpty(text)) {
      Posts.insert({
        sender_id: Meteor.user()._id,
        receiver_id: Meteor.users.findOne({username: Router.current().params.username})._id,
        createdAt: new Date(),
        text: text
      });
    }

    $("#create-post-input").val("");
  }
});

/*****************************************************************************/
/* CreatePost: Helpers */
/*****************************************************************************/
Template.CreatePost.helpers({
});

/*****************************************************************************/
/* CreatePost: Lifecycle Hooks */
/*****************************************************************************/
Template.CreatePost.onCreated(function () {
});

Template.CreatePost.onRendered(function () {
  // http://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
  var observe;
  if (window.attachEvent) {
      observe = function (element, event, handler) {
          element.attachEvent('on'+event, handler);
      };
  } else {
      observe = function (element, event, handler) {
          element.addEventListener(event, handler, false);
      };
  }
  function init() {
      var text = document.getElementById('create-post-input');
      function resize() {
          text.style.height = 'auto';
          text.style.height = text.scrollHeight+'px';
      }
      /* 0-timeout to get the already changed text */
      function delayedResize() {
          window.setTimeout(resize, 0);
      }
      observe(text, 'change',  resize);
      observe(text, 'cut',     delayedResize);
      observe(text, 'paste',   delayedResize);
      observe(text, 'drop',    delayedResize);
      observe(text, 'keydown', delayedResize);

      text.focus();
      text.select();
      resize();
  }
  init();
});

Template.CreatePost.onDestroyed(function () {
});





