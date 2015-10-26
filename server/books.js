Meteor.methods({
  borrowBook: function(bookId) {
    Books.update(bookId, { $set: { borrowed: true } })
  },

  returnBook: function(bookId) {
    Books.update(bookId, { $set: { borrowed: false } })
  }
});
