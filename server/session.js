Meteor.methods({
  createUser: function() {
    return FakeLogins.insert({ date: new Date() });
  }
});
