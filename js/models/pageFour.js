var pageFour;

$(function(){
    //Define Page-Four Model
    var PageFour = Backbone.Model.extend({
        defaults: function() {
            return {
               event_names: []
            };
        },
        
    });

    pageFour = new PageFour();
})