window.onload = function() {
var zoom = document.getElementById('zoom');


}
function getSmallMenu() {
	if
		($('.left_menu_wrapper').css('width') == '200px'){
	
	
	$('.left_menu_wrapper').css({'width': '45px'});
	$('.logo_subtitle').css({'display': 'none'});
	$('#addNewOrderButton').css({'width': '40px'});
	 $('.user_links').css({'display': 'none'});
	 $("#logo").attr('src','svg/e_logo.svg');
     
     $('.logo_wrapper').css({'width': '45px', 'height': '9vh'});
     $('#logo').css({ 'width': '195px', 'marginLeft': '-42px'});
     $('.logo').css({'top': '0px'});
     $('.menu_items_wrapper').css({'width': '45px'});
     $('.hr').css({'display': 'none'});
     $('.menu_items').css({'width': '100%', 'margin': '0'});
     $('.item').css({'width': '20px', 'position': 'relative'});
     $('.menu_item_wrapper').css({'position': 'static', 'height' : 'none'});
     $('.item_title').css({'display': 'none'});
     
     $('.button_detail').css({'lineHeight' : '39px','width': '39px', 'marginRight' : '0'});
     $('.button_wrapper').css({'width': '40px'});
     $('.new_order').css({'display': 'none'});
      $("#zoom").attr('src','svg/new_zoom.svg');

     }
     else{
     	$('.left_menu_wrapper').css({'width': '200px'});
     	$('.new_order').css({'display': 'block'});
     	 $('.button_wrapper').css({'width': '135px'});
     	 $('.button_detail').css({'lineHeight' : '37px', 'marginRight' : '18'});
     	 $('.item_title').css({'display': 'block'});
     	 $('.menu_item_wrapper').css({'position': 'relative', 'height' : '37px'});
     	 $('.item').css({'width': '73%', 'position': 'absolute'});
     	 $('.menu_items').css({'width': '100%', 'margin': 'auto'});
     	 $('.hr').css({'display': 'block'});
     	 $('.menu_items_wrapper').css({'width': '200px'});
     	 $('.logo').css({'top': '28px'});
     	 $('#logo').css({ 'width': '73%', 'margin': 'auto'});
     	  $('.logo_wrapper').css({'width': '200px', 'height': '13vh'});
     	   $("#logo").attr('src','svg/logo.svg');
     	    $('.user_links').css({'display': 'block'});
     	    $('#addNewOrderButton').css({'width': '174px'});
     	    $('.logo_subtitle').css({'display': 'block'});
     	     $("#zoom").attr('src','svg/zoom.svg');
     	   
     }

    


	


}