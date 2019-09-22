//fix iOS scaling bug
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}

// remap jQuery to $
(function($){

  $(document).ready(function() {
    //initTabs();	
  });
    
  var resizeTimer;
  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initTabs, 400);
  });
  /* Tabs
  ================================================== */
  
  ;function initTabs(current) {
    current = typeof(current) != 'undefined' ? current : '#about';
    var tabs = $('.tabs'), //our top nav instance
    navs = $('.main-nav'), //all instances of nav
  	trigger = Modernizr.mq('only screen and (min-width: 768px)');    
    
   	tabs.each(function(i) {
 		//Get all tabs
 		  var tab = $(this).find('> li > a');
 		  
      //check wide enough to init tabs
   		if (trigger){
   		  //activate current tab
        var startTab = $('a[href=' + current + ' ]', tabs);
        startTab.addClass('active')
        $(current).show().addClass('active').siblings().hide().removeClass('active');
     		tab.click(function(e) {
     			//Get Location of tab's content
     			var contentLocation = $(this).attr('href');
     			//Let go if not a hashed one
     			if(contentLocation.charAt(0)=="#") {
     				e.preventDefault();
     				//Make Tab Active
     				tab.removeClass('active');
     				$(this).addClass('active');
     				//Show Tab Content & add active class
     				$(contentLocation).fadeIn().addClass('active').siblings().hide().removeClass('active');
     			}
     			else {
     			  //external links in new window
     			  e.preventDefault();
     			  window.open(contentLocation);
     			} 
     		});
     	}
     	else {
   		  tab.unbind('click').removeClass('active');
   		  tab.each(function(){
     		  $this = $(this);
     		  $($this.attr('href')).show();
   		  });
   		  //scroll to active item
     	}
 	  }); 
  }
   


})(window.jQuery);