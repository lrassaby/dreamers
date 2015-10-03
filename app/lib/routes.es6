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


Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        Router.go('/login');
        this.next(); 
    } else {
        this.next();
    }
}, {
    except: [undefined, '/login']
});


Router.route('/:username', {
    name: 'view_profile',
    controller: 'ProfilesController',
    where: 'client'
});