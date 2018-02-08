let pageOne;

$(function(){
    //Define Page-One Model
    let PageOne = Backbone.Model.extend({
        defaults: function() {
            return {
                eventName: "",
                dateFormat: "Custom",
                dateFormatOptions: ["Custom", "MTD"],
                startDate: null,
                endDate: null,
            };
        }
    });

    pageOne = new PageOne();

});