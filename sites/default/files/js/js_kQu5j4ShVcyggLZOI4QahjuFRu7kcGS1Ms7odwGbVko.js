window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


;
/* ----- 

	Steven John Miller
	
------ */
 
 /* --- Table of contents ---
	1. General Javascript Functions
	2. Index Navigation Reposition
	3. Side Navigation Reposition
	4. Product Collapse
 */
 
 /* --- Happy Lab Specific Functions --- */
 var stevenjohnmiller = {
 	getDocumentHeight: function() {
 		var bodyHeight = $(window).height();
 		var headerReposition = ($('header').height() / 2 );
 		
 		if ($('body').height() > $(window).height() ) {
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

;
