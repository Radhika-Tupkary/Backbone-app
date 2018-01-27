var mainModel;

$(function(){

    //Define Main Model
    var MainModel = Backbone.Model.extend({
        defaults: function() {
            return {
                pageOne     : pageOne,
                pageTwo     : pageTwo,
                pageThree   : pageThree,
                pageFour    : pageFour,
                pageFive    : pageFive,
                currentPage : 1
            };
        },

        initialize: function() {
            _.bindAll(this, "buildJSON");
        },

        buildJSON: function(){
            debugger;

        	var pageOneProperties = this.get("pageOne").toJSON();
            delete pageOneProperties.dateFormatOptions;
            delete pageOneProperties.dateFormat;

            var pageTwoProperties = this.get("pageTwo").toJSON();
            delete pageTwoProperties.initialOptionsArray;
            
            var pageThreeProperties = this.get("pageThree").toJSON();
            delete pageThreeProperties.typeOptions;
            delete pageThreeProperties.stockOptions;
            delete pageThreeProperties.holdingPeriodOptions;

            var pageFourProperties = this.get("pageFour").toJSON();

            var pageFiveProperties = this.get("pageFive").toJSON();
            delete pageFiveProperties.indicatorNumberOptions;

            output = $.extend(pageOneProperties, pageThreeProperties, pageFiveProperties);

            // assumption - Page two and page four inputs are optional and others compulsory
            
            for(key in output) {
                if(output[key] == null || output[key] == "" || output[key] == undefined) {
                    alert("Oops, looks like you forgot to fill some fields on either page 1, 3 or 5! \n Please fill all the fields for a successful completion")
                    return;
                }
            }

            outputFinal = $.extend(output, pageTwoProperties, pageFourProperties);

            console.log(outputFinal);
            alert(JSON.stringify(outputFinal));
        }
    });

    mainModel = new MainModel();

});