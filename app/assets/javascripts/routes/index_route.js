AFLT2.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo("posts");
  }
});