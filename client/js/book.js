Template.book.events({
  'click .books-shelf-borrow': function(event) {
    Meteor.call("borrowBook", this._id, localStorage.getItem('fakeLogin'));
  },

  'click .books-shelf-return': function(event) {
    Meteor.call('returnBook', this._id);
  }
});

Template.book.helpers({
  borrowedByMe: function(borrowed) {
    return borrowed && borrowed == localStorage.getItem('fakeLogin')
  }
});
