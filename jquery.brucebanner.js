// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    
    
(function( $ ) {

	$.fn.brucebanner = function(options) {
	
		var settings = $.extend({delta: 3000}, options );
	
		var that = this, last = Date.now();    
        
        this.find('ul').addClass('js');
        
        this.find('li[data-bg]').each(function(i) {
	        $(this).css({backgroundImage:'url("' + $(this).data('bg') + '")'});
        });

		function loop() {
			if(Date.now() - last >= settings.delta){
				last = Date.now();
				render();
			}
			requestAnimFrame(loop);
		}
		
		function render() {
			that.find("li").eq(0).slideUp(function() {  //.css({'position':'absolute', 'z-index':'1'}).
				$(this).appendTo($(this).parent()).show(); //.css({'position':'relative', 'z-index':'0'})
			});
		}
		
		loop();
		
		return this;
	};	

})( jQuery );