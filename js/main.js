


var gameRouter = Backbone.Router.extend({
  routes: {
    "": "main",
    "menu": "menu",
    "play": "play",
    "leaderboard": "leaderboard",
    "settings": "settings"
  },
  main: function(){
    var router = this;
    $('.dunkel').html('<p>Loading...</p>');
    setTimeout(function(){
      router.navigate('menu', {trigger: true});
    }, 4000);
  },
  menu: function() {
    $('.dunkel').html('<a href="#play">Play</a> ' + '<a href="#leaderboard">leaderboard</a> ' + '<a href="#settings">Settings</a>')
  },

  play: function() {
     $('.dunkel').html('<img class="image" src="http://themetalreview.com/wp-content/uploads/2015/04/0.jpeg">');
  },

  leaderboard: function() {
    $('.dunkel').html('<img class="image" src="http://image.automotive.com/f/news/study-bad-drivers-listen-to-nickelback-and-the-black-eyed-peas-124159/62853213+w968/chad-kroeger-nickelback-terrible-song-driving.jpg">');
  },

  settings: function() {
    $('.dunkel').html('<img class="image" src="http://cdn2.crushable.com/wp-content/uploads/2012/08/chadkroeger.jpeg">');
  }

});

var router = new gameRouter();
Backbone.history.start();
