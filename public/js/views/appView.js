$(function(){
    let AppView = Backbone.View.extend({

		el: $("#myModal"),
	
		initialize: function() {

			this.listenTo(mainModel, "change", this.render);
		},

		events: {
			"click .page-button" : "pageButtonClicked",
			"click .dismiss"     : "closeButtonClicked"
		},

		render: function() {


            let currentPageNumber = mainModel.get("currentPage");

			$('.page-button').each(function(i, button) {
				if(i < currentPageNumber){
					$(button).addClass("active");
					$(button).removeClass("passive");
				} else{
					$(button).addClass("passive");
					$(button).removeClass("active");
				}
			});

			$(".sub-header").text("Question " + currentPageNumber + " of 5");

			switch(currentPageNumber) {
				case 1 : 
					var currentView = new PageOneView({model: mainModel.get("pageOne")});
					this.$(".inside-container").html(currentView.render().el);
					break;
				case 2 :
					var currentView = new PageTwoView({model: mainModel.get("pageTwo")});
					this.$(".inside-container").html(currentView.render().el);
					break;
				case 3 :
					var currentView = new PageThreeView({model: mainModel.get("pageThree")});
					this.$(".inside-container").html(currentView.render().el);
					break;
				case 4 :
					var currentView = new PageFourView({model: mainModel.get("pageFour")});
					this.$(".inside-container").html(currentView.render().el);
					break;
				case 5 :
					var currentView = new PageFiveView({model: mainModel.get("pageFive")});
					this.$(".inside-container").html(currentView.render().el);
					break;
				default :
					break;
			}
		},

		pageButtonClicked: function(e){
            let clickedPage = $(e.currentTarget).data("page");
			mainModel.set("currentPage", clickedPage);
		},

		closeButtonClicked: function(e){
			if(confirm("Are you sure you want to leave ? If you leave now, your changes will be lost.")) {
        		$('#myModal').modal('hide');
			}
		}

	});

	let App = new AppView();
    App.render();
});