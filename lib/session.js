FakeLogins = new Mongo.Collection('fakelogins');

if (Meteor.isClient) {
  if (!localStorage.getItem('fakeLogin')) {
    Meteor.call('createUser', function(err, result){
      localStorage.setItem('fakeLogin', result);
    });
  }
} 
