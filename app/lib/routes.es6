Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  profile: 'UsersController',
  where: 'client'
});


Router.route('/:username', {
  name: 'profile',
  profile: 'UsersController',
  where: 'client'
});
