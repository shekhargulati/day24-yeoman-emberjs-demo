Emberapp.StoryEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('story', model.story_id);
  }
});

