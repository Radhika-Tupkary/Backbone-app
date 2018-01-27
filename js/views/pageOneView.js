var PageOneView = Backbone.View.extend({
	template: _.template($("#page-one").html()),
	events: {
		"change .date-format"  : "dateFormatSelect",
		"focusout .event-name" : "updateOnEnter",
		"click .begin"		   : "beginButtonClicked",
		"change .start-date"   : "startDateSelected",
		"change .end-date"	   : "endDateSelected"
	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		if($(".date-format").find(':selected').val() == "MTD") {
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			if(dd<10) {
			    dd='0'+dd
			} 
			if(mm<10) {
			    mm='0'+mm
			} 
			today = yyyy+'-'+mm+'-'+dd;
			firstDay = yyyy+'-'+mm+'-01';
			this.model.set({startDate : firstDay});
			this.model.set({endDate : today});
		}
		console.log(mainModel.get("pageOne").get("startDate"));
		console.log(mainModel.get("pageOne").get("endDate"));

		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	updateOnEnter: function(e) {
		if (!$(".event-name").val()) return;
		this.model.set({eventName : $(".event-name").val()});
		console.log(mainModel.get("pageOne").get("eventName"));
	},

	startDateSelected: function(){
		if($(".start-date").val() !== "" && $(".end-date").val() !== "" && $(".start-date").val() > $(".end-date").val()) {
			alert("Oops! Sorry, start-date cannot be greater than end-date");
			this.model.set({startDate : ""});
			return;
		}
		this.model.set({startDate : $(".start-date").val()});
		console.log(mainModel.get("pageOne").get("startDate"));
	},

	endDateSelected: function(){
		if($(".start-date").val() !== "" && $(".end-date").val() !== "" && $(".start-date").val() > $(".end-date").val()) {
			alert("Oops! Sorry, end-date cannot be earlier than start-date");
			this.model.set({endDate : ""});
			return;
		}
		this.model.set({endDate : $(".end-date").val()});
		console.log(mainModel.get("pageOne").get("endDate"));
	},

	dateFormatSelect: function(e) {
		this.model.set({dateFormat : $(".date-format").find(':selected').val()});
		console.log(mainModel.get("pageOne").get("dateFormat"));

		
	},

	beginButtonClicked: function(){
		mainModel.set("currentPage", 2);
	}

});