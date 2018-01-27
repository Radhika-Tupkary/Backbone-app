var PageThreeView = Backbone.View.extend({
	template: _.template($("#page-three").html()),
	events: {
		"change .event-type"     : "eventTypeSelect",
		"change .holding-period" : "holdingPeriodSelect",
		"focusout .stock-select"  : "stockSelected",
		"click .previous-three"	 : "previousButtonClicked",
		"click .next-three"		 : "nextButtonClicked"

	},
	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	eventTypeSelect :function(e) {
		this.model.set({type : $(".event-type").find(':selected').val()});
		console.log(mainModel.get("pageThree").get("type"));
	},

	stockSelected: function(e) {
		if (!e.currentTarget.value || e.currentTarget == "") {
			return;
		}
		this.model.set({stock : e.currentTarget.value});
		console.log(mainModel.get("pageThree").get("stock"));
	},

	holdingPeriodSelect :function(e) {
		this.model.set({holdingPeriod : $(".holding-period").find(':selected').val()});
		console.log(mainModel.get("pageThree").get("holdingPeriod"));
	}, 

	previousButtonClicked: function(){
		mainModel.set("currentPage", 2);
	},

	nextButtonClicked: function(){
		mainModel.set("currentPage", 4);
	}

});