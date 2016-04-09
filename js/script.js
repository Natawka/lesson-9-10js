$(function(){
	$("#my_select").chosen();
	
	$('.box').click(function(){
		if($(this).find('input').attr('checked')){
			$(this).find('input').attr('checked', false);
			$(this).css('backgroundPosition', '0 0');
		}else{
			$(this).find('input').attr('checked', true);
			$(this).css('backgroundPosition', '-17px 0');
		}
		
	})
	
	$('#menu li ').hover(function(){
    $(this).find('ul:first').css({ //Nav3.1
        visibility: "visible",
		
       }).show(300);
      },function(){
       $(this).find('ul:first').css({visibility: "hidden"}).hide(300);
     });

	$('ul:first').find('a').hover(function(){
    $(this).css({
        color: "#696969",
		opacity: '0.8',
		
        }).show(300);
      },function(){
       $(this).css({
		   color: "white",
		   opacity: '1',
		   });
     });
	 
	
});