Books = new Mongo.Collection('books');

if (Meteor.isServer && Books.find().count() === 0) {
  titles = [
    {
      title: 'Mandela',
      author: 'Martin Meredith',
      cover: 'mandela.large.jpg'
    },
    {
      title: 'The User Experience Team of One: A Research and Design Survival Guide',
      author: 'Leah Buley',
      cover: 'soyouvebeenshamedcover.png'
    },
    {
      title: 'The User Experience Team of One: A Research and Design Survival Guide',
      author: 'Leah Buley',
      cover: '71aTsq1zJrL.jpg'
    },
    {
      title: 'Javascript & Jquery',
      author: 'David Flanagan',
      cover: '41DJtQp8RoL._SX400_BO1,204,203,200_.jpg'
    },
    {
      title: 'Lean UX: Applying Lean Principles to Improve User Experience',
      author: 'Jeff Gothelf',
      cover: '41JWTd4PCWL._SX331_BO1,204,203,200_.jpg'
    },
    {
      title: 'Logo Design Love: A Guide to Creating Iconic Brand Identities, 2nd Edition',
      author: 'David Airey',
      cover: '41MfFFscyrL._SX385_BO1,204,203,200_.jpg'
    },
    {
      title: 'The Lean Startup: In-Depth Summary',
      author: 'Eric Ries',
      cover: '41nw+H70zjL._SX331_BO1,204,203,200_.jpg'
    },
    {
      title: 'AngularJS: Up and Running: Enhanced Productivity with Structured Web Apps',
      author: 'Shyam Seshadri and Brad Green',
      cover: '51B9gv--ogL._SX376_BO1,204,203,200_.jpg'
    },
    {
      title: 'Know Your Onions - Graphic Design: How to Think Like a Creative, Act like a Businessman and Design Like a God',
      author: 'Drew de Soto',
      cover: '51BfQ4SFY9L._SX358_BO1,204,203,200_.jpg'
    },
    {
      title: 'Responsive Web Design',
      author: 'Ethan Marcotte',
      cover: '41AbJ3ziHcL._SX321_BO1,204,203,200_.jpg'
    },
    {
      title: 'Two Scoops of Django: Best Practices For Django 1.6',
      author: 'Daniel Greenfeld and Audrey Roy',
      cover: '51HKvWTPEPL._SX404_BO1,204,203,200_.jpg'
    },
    {
      title: 'Learning Python, 5th Edition',
      author: 'Mark Lutz',
      cover: '51ycFmfAeKL._SX379_BO1,204,203,200_.jpg'
    },
    {
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      cover: '41K27gRbYmL._SX396_BO1,204,203,200_.jpg'
    },
    {
      title: 'The Great Divide: Unequal Societies and What We Can Do About Them',
      author: 'Joseph E. Stiglitz',
      cover: '51Dh5aGJAWL._SX327_BO1,204,203,200_.jpg'
    },
    {
      title: 'Brand Thinking and Other Noble Pursuits',
      author: 'Debbie Millman',
      cover: '61a6UMurDTL._SX328_BO1,204,203,200_.jpg'
    },
    {
      title: '100 Things Every Designer Needs to Know About People',
      author: 'Susan Weinschenk',
      cover: '71tHm-lfBzL.jpg'
    },
    {
      title: 'Tales from Both Sides of the Brain: A Life in Neuroscience',
      author: 'Michael S. Gazzaniga',
      cover: '512Vpe7COkL._SX324_BO1,204,203,200_.jpg'
    },
    {
      title: 'Burn Your Portfolio: Stuff they don\'t teach you in design school, but should',
      author: 'Michael Janda',
      cover: '61tbi3K7CxL._SX332_BO1,204,203,200_.jpg'
    },
    {
      title: 'The Economics of Inequality',
      author: 'Thomas Piketty',
      cover: '41W9ELABmwL._SX332_BO1,204,203,200_.jpg'
    },
    {
      title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems',
      author: 'Lea Verou',
      cover: '514xUTUlGwL._SX408_BO1,204,203,200_.jpg'
    },
    {
      title: 'In Defense Of Thomas Jefferson',
      author: 'William G. Hyland Jr.',
      cover: 'in_defense_of_thomas_jefferson.large.jpg'
    },
    {
      title: 'Dangerous Frames',
      author: 'Nicholas J. G. Winter',
      cover: 'dangerous_frames.large.jpg'
    }
  ];

  titles.forEach(function(title){
    Books.insert(title);
  })
}

if (Meteor.isServer) {
  Meteor.publish("books", function () {
    return Books.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("books");

  Template.home.helpers({
    books: function () {
      return Books.find({});
    }
  });
}
