Router.configure({
  layoutTemplate: 'layout'
});

Router.route('home', {
  path: '/'
});

Router.route('book-detail', {
  path: '/book/:id',
  data: function() {
    return Books.findOne(this.params.id);
  }
});
