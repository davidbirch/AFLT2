AFLT2.PostsRoute = Ember.Route.extend({
  model: function() {
    return AFLT2.Post.find();
  }
});
