$( document ).ready(function(){
	// Hide Factors Panel - Score shown by default
	$("#showFactorsPanel").hide();
	$(".test").equalHeights();
	
	$( "#showScore" ).click(function() {
		$("#showFactorsPanel").hide();
		$("#showScorePanel").show();
		$("#showScore").addClass ("active");
		$("#showFactors").removeClass ("active");
	});
	
	$( "#showFactors" ).click(function() {
		$("#showFactorsPanel").show();
		$("#showScorePanel").hide();
		$("#showScore").removeClass ("active");
		$("#showFactors").addClass ("active");
	});
});

(function($) {
 $.fn.equalHeights = function(minHeight, maxHeight) {
  tallest = (minHeight) ? minHeight : 0;
  this.each(function() {
   if($(this).height() > tallest) {
	tallest = $(this).height();
  }
});
  if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
  return this.each(function() {
   $(this).height(tallest).css("overflow","auto");
 });
}

// nav hilites
/*
$( "ul.dropdown-menu > li" ).click(function() {
		 $("li.dropdown").removeClass('active');
		 $("ul.dropdown-menu > li").removeClass('active');
		 $(this).parents(".dropdown").addClass ("active");
		 $(this).addClass("active");
	});
*/

// select alerts function
$( ".alertSelect" ).click(function() {
		var alertID = $(this).attr('rel');
		$(".alerts").hide();
		$("#" +alertID).show();
	});

// update payment toggle
$( "button.btn-pay" ).click(function() {
		//$(".payment").fadeToggle();
		$(this).parentsUntil(".panel-collapse").find(".payment").fadeToggle();
	});

/* date picker - HTML5 or jQuery control
function dateTypeIsSupported() {
		var i = document.createElement("input");
		i.setAttribute("type", "date");
		return i.type !== "text";
	}
	if ( dateTypeIsSupported() ) {
		  // HTML5 is a go!
		  document.getElementById('cardExpNew').type = 'date';
	  } else {
		  // No HTML5. Use jQueryUI datepicker instead.
		  $('#cardExpNew').datepicker({
				format: "mm/dd/yyyy"
			});
	  }
*/
	  
$('#myButton').popover();
$('#myTooltip').tooltip();

// add active class to parent LI NAV elements after page loads
$(window).bind("load", function() {
 $('.dropdown-menu>li.active').parents("li").addClass("active");
 });

})(jQuery);
