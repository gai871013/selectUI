/* 
* selectUI 0.1 
* Copyright (c) 2013 gai871013 http://www.wc87.com/ 
* Date: 2013-4-17
* 美化select选择框
*/ 

(function($){ 
  $.fn.selectUI = function(o){ 
		o=$.extend({
		ipt:".select",
		tp:".type", 
		tpbx:".tpyebox"
		},
		o||{});
		return this.each(function(){
			 
			$(this).mouseenter(function(){
				$(o.tp).addClass("open");
				}); 
			$(o.tpbx).mouseenter(function(){
				$(o.tp).addClass("open");
				});
			$(this).mouseenter(function(){
				$(o.tpbx).stop(true,true).slideDown(300);
				
				});
			$(this).mouseleave(function(){
				$(o.tpbx).stop(true,true).slideUp(200,function(){
					$(o.tp).stop(true,true).removeClass("open");
					});
				
				});

			var f=$(o.tpbx).find("dd"),
				_n=f.size(),
				arr=new Array(_n-1)
				html=new Array(_n-1);
				
			for(var i=0;i<_n;i++){
				arr[i]=f.eq(i).attr("searchtype");
				html[i]=f.eq(i).text();
				}
			f.click(function(){
				var index=f.index($(this));
				$(o.ipt).val(arr[index]);
				$(o.tp).html(html[index]);
				
				$(o.tpbx).stop(true,true).slideUp(100,function(){
					$(o.tp).removeClass("open");
					});
				
				});
			
			
		}); 
	}; 
})(jQuery); 
