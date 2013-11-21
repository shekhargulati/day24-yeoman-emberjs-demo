/*global Ember*/
Emberapp.Story = DS.Model.extend({
  url : DS.attr('string'),
    tags : DS.attr('string'),
    fullname : DS.attr('string'),
    title : DS.attr('string'),
    excerpt : DS.attr('string'),
    submittedOn : DS.attr('date')
});
