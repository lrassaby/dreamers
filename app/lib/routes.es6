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
  name: 'login_page',
  where: 'client'
});


Router.route('/:username', {
    name: 'view_profile',
    controller: 'ProfilesController',
    where: 'client',
    data: function() {
        return Meteor.users.findOne({username: this.params.username});
    }
});