/* ----- 

	Steven John Miller
	
------ */
 
 /* --- Table of contents ---
	1. General Javascript Functions
 */
 
 /* --- Steven John Miller Specific Functions --- */
 var stevenjohnmiller = {
 	getDocumentHeight: function() {
 		var bodyHeight = $(window).height();
 		var headerReposition = ($('header').height() / 2 );
 		
 		if ($('body').height() < $(window).height() ) {
 			$('body').height(bodyHeight);
 			$('header').css('margin-top', '-' + headerReposition);
 		}
 	}	
 	
 }
 
$(document).ready(function() {
  
    /* 1. General Javascript Functions --- */
   stevenjohnmiller.getDocumentHeight();
    
});

// On Window Resize
window.onresize = function(event) {
	stevenjohnmiller.getDocumentHeight();
}

