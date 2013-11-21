Emberapp.StoryRoute = Ember.Route.extend({
  model : function(params){
        var store = this.get('store');
        return store.find('story',params.story_id);
  }
});

