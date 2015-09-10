Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', function() {
  if (Meteor.userId()) {
    this.render('DirectoryPage', {
      controller: 'HomeController'
    });
  } else if (!Meteor.userId() && !Meteor.loggingIn()) {
    this.render('Landing');
  } 
});

Router.route('/login', {
  name: 'login_page',
  where: 'client'
});


Router.route('/:username', {
    name: 'view_profile',
    controller: 'ProfilesController',
    where: 'client'
});