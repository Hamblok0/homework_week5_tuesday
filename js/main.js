


var gameRouter = Backbone.Router.extend({
  routes: {
    "": "Menu",
    "play": "play",
    "leaderboard": "leaderboard",
    "settings": "settings"
  },


  play: function() {
     $('.dunkel').html('');
     $('.dunkel').append('<img class="image" src="http://themetalreview.com/wp-content/uploads/2015/04/0.jpeg">');
  },

  leaderboard: function() {
    $('.dunkel').html('');
    $('.dunkel').append('<img class="image" src="http://image.automotive.com/f/news/study-bad-drivers-listen-to-nickelback-and-the-black-eyed-peas-124159/62853213+w968/chad-kroeger-nickelback-terrible-song-driving.jpg">');


  },

  settings: function() {
    $('.dunkel').html('');
    $('.dunkel').append('<img class="image" src="http://cdn2.crushable.com/wp-content/uploads/2012/08/chadkroeger.jpeg">');
  }

  setTimeout(goAway({
    $('.dunkel').html('');
    $('.dunkel').append('<section class="loading">Loading...</section>');
  }) 4000);
});

var router = new gameRouter();
Backbone.history.start();
