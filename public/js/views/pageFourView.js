let PageFourView = Backbone.View.extend({
	template: _.template($("#page-four").html()),
	events: {
		"click .previous-four" : "previousButtonClicked",
		"click .next-four"	   : "nextButtonClicked",
		"click .add"		   : "addButtonClicked",
		"click .remove"	       : "removeButtonClicked"
	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	addButtonClicked: function(e) {
		event_names = this.model.get("event_names");
        let add_number = $(e.currentTarget).data("number");
		switch(add_number){
			case 1 :
				event_names.push("FLR Annual Report Event");
				break;
			case 2 :
				event_names.push("FLR Book Value of Capital to EBITDA Rank");
				break;
			case 3 :
				event_names.push("FLR Book Value of Capital to EBITDA Ratio");
				break;
			case 4 :
				event_names.push("FLR Cash Flow Value");
				break;
			default : break;

		}
		this.model.set({event_names:event_names});
		console.log(mainModel.get("pageFour").get("event_names"));
		this.render();
	},

	removeButtonClicked :function(e) {
        let item_number = $(e.currentTarget).data("close-number");
		event_names = mainModel.get("pageFour").get("event_names");
		event_names.splice(item_number, 1);
		this.model.set({event_names:event_names});
		console.log(mainModel.get("pageFour").get("event_names"));
		this.render();
	},
	
	previousButtonClicked: function(){
		mainModel.set("currentPage", 3);
	},

	nextButtonClicked: function(){
		mainModel.set("currentPage", 5);
	}

});