let pageFour;

$(function(){
    //Define Page-Four Model
    let PageFour = Backbone.Model.extend({
        defaults: function() {
            return {
               event_names: []
            };
        },
        
    });

    pageFour = new PageFour();
});