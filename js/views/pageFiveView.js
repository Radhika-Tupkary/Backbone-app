var PageFiveView = Backbone.View.extend({
	template: _.template($("#page-five").html()),
	events: {
		"change .indicator-number" : "selectIndicatorNumber",
		"click .previous-five"	   : "previousButtonClicked",
		"click .finish"		       : "finishButtonClicked",

	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	
	selectIndicatorNumber: function(e) {
		this.model.set({indicatorNumber : $(".indicator-number").find(':selected').val()});
		console.log(mainModel.get("pageFive").get("indicatorNumber"));
	},

	previousButtonClicked: function(){
		mainModel.set("currentPage", 4);
	},

	finishButtonClicked: function(){
		mainModel.buildJSON();
	}
});