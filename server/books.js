Meteor.methods({
  borrowBook: function(bookId, userSessionId) {
    Books.update(bookId, { $set: { borrowed: userSessionId } })
  },

  returnBook: function(bookId) {
    Books.update(bookId, { $set: { borrowed: false } })
  }
});
