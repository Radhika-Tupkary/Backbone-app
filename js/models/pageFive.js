var pageFive;

$(function(){
    //Define Page-Five Model
    var PageFive = Backbone.Model.extend({
        defaults: function() {
            return {
                indicatorNumber: "1",
                indicatorNumberOptions : ["1", "2", "3"]
            };
        }
    });

    pageFive = new PageFive();
})