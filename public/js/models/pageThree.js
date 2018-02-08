let pageThree;

$(function(){
    //Define Page-Three Model
    let PageThree = Backbone.Model.extend({
        defaults: function() {
            return {
              type : "Long",
              typeOptions : ["Long", "Short", "Long-Short"],
              stock : "",
              stockOptions : ['$S&P', '$SPQ', '$GHI', '$GHT', '$SBX', '$DGI', '$DFI'],
              holdingPeriod : "1-Day",
              holdingPeriodOptions : ["1-Day", "5-Days", "10-Days", "15-Days", "21-Days"]
            };
        },
        
    });

    pageThree = new PageThree();
});