window.onload = function() {
    var zoom = document.getElementById('zoom');
     $('#datepicker').datepicker({
          weekStart: 1,
          daysOfWeekHighlighted: "6,0",
          autoclose: true,
          todayHighlight: true,
      });
      $('#datepicker').datepicker("setDate", new Date());
      $('#datepicker2').datepicker({
          weekStart: 1,
          daysOfWeekHighlighted: "6,0",
          autoclose: true,
          todayHighlight: true,
      });
      $('#datepicker2').datepicker("setDate", new Date());
        (function($){
               $(window).on("load",function(){
               $("#blocktable-id").mCustomScrollbar({
                         axis:"x",
                         theme:"inset-2-dark",
                         advanced:{autoExpandHorizontalScroll:true}
                    });
                    
               });
          })(jQuery);

  
     
     
        


}


function getSmallMenu() {


    let titles = $('.hidden');
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        element.classList.toggle('hide');
    }
    if ($('.left_menu_wrapper').css('width') == '200px') {
        $("#logo").attr('src', 'img/e_logo.svg');
        // $("#zoom").attr('src', 'img/new_zoom.svg');




    } else {

        $("#logo").attr('src', 'img/logo.svg');
        // $("#zoom").attr('src', 'img/zoom.svg');

    }





}
function ShowOrders(){
     let orders = $('.show');
      for (let index = 0; index < orders.length; index++) {
        const elem = orders[index];
     elem.classList.toggle('hideOrders');

}
}