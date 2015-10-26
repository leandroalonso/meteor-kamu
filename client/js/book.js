Template.book.events({
  'click .books-shelf-borrow': function(event) {
    Meteor.call("borrowBook", this._id);
  },

  'click .books-shelf-return': function(event) {
    Meteor.call('returnBook', this._id);
  }
});
