Emberapp.Router.map(function () {
  
  this.resource('index',{path : '/'});
  this.resource('story', { path: '/story/:story_id' });
  this.resource('story_edit', { path: '/story/new' });
  
  
});
