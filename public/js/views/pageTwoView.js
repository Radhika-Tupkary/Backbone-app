let PageTwoView = Backbone.View.extend({
	template: _.template($("#page-two").html()),
	events: {
		"click .next-two"	   : "nextButtonClicked",
		"click .previous-two"  : "previousButtonClicked",
		"change .sectors"      : "updateSectors"

	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	
	updateSectors: function(){
        let selectedInputs = [];
		$('.sectors input:checked').each(function() {
    		selectedInputs.push($(this).attr('name'));
		});

      	this.model.set({selectedOptionsArray: selectedInputs});
      	console.log(mainModel.get("pageTwo").get("selectedOptionsArray"));

	},
	

	previousButtonClicked: function(){
		mainModel.set("currentPage", 1);
	},

	nextButtonClicked: function(){
		mainModel.set("currentPage", 3);
	}

});