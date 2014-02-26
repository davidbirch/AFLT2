AFLT2.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return AFLT2.Post.createRecord({
      publishedAt: new Date(),
      author: "current user"
    });
  }
});
