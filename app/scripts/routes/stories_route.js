Emberapp.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('story');
  }
});

