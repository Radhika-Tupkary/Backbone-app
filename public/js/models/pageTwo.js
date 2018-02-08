let pageTwo;

$(function(){
    //Define Page-Two Model
    let PageTwo = Backbone.Model.extend({
        defaults: function() {
            return {
            	initialOptionsArray: ['Consumer-Discretionary', 'Consumer-Staples', 'Energy', 'Finantials', 'Forex', 'HealthCare', 'Industry', 'Information-Technology', 'Materials', 'Telecommunication-Services', 'Utilities'],
            	selectedOptionsArray: []
            };
        },
       
    });

    pageTwo = new PageTwo();
});