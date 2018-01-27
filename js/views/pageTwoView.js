var PageTwoView = Backbone.View.extend({
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
		// this.model.set({holdingPeriod : $(".holding-period").find(':selected').val()});
		// initialOptions: 'jQuery,Backbone,ModelBinder',
		var selectedInputs = [];
		$('.sectors input:checked').each(function() {
    		selectedInputs.push($(this).attr('name'));
		});

		// var options = this.model.get('initialOptions').split(',');
		// var jslikeVal = _.map(options, function(opt){
  //         return this.jslikeModel.get(opt) ? opt : '';
  //     	}, this);
  //     	jslikeVal = _.reject(jslikeVal, function(opt) { return opt == "" });
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