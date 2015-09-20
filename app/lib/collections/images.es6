let imageStore = new FS.Store.GridFS('images');
Images = new FS.Collection('images', {
 stores: [imageStore]
});

if (Meteor.isServer) {
  // TODO: change allow rules
  Images.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  // Images.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}
