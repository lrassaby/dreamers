Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', function() {
  if (Meteor.userId()) {
    this.render('DirectoryPage');
  } else if (!Meteor.userId() && !Meteor.loggingIn()) {
    this.render('Landing');
  } 
}, {
  controller: 'DirectoryController'
});

Router.route('/login', function() {
  if (Meteor.userId()) {
    Router.go('/');
  } else if (!Meteor.userId() && !Meteor.loggingIn()) {
    this.render('LoginPage');
  } 
});

// TODO: make the login redirect work
// we want to be sure that the user is logging in
// for all routes but login
// Router.onBeforeAction(function () {
//     if (!Meteor.user() && !Meteor.loggingIn()) {
//         Router.go('/login');
//     } else {
//         this.next();
//     }
// }, {
//     except: ['/', '/login']
// });


Router.route('/:username', {
    name: 'view_profile',
    controller: 'ProfilesController',
    where: 'client'
});