/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'getUserProfile' : function(data){
    userData = Meteor.users.find({username: data}).fetch();
    return userData[0].profile;
  }
});

