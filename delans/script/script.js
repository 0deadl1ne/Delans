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

    document.getElementById("clearButton").onclick = function(e) {
        document.getElementById("search-text").value = "";
        tableSearch();
    }
}

function getSmallMenu() {

    let titles = $('.hidden');
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        // let hh = element.classList.contains('hide');
        element.classList.toggle('hide');
    }
    if ($('.left_menu_wrapper').hasClass('hide')) {
        $("#logo").attr('src', 'img/e_logo.svg');
        // $("#zoom").attr('src', 'img/new_zoom.svg');
    } else {

        $("#logo").attr('src', 'img/logo.svg');
        // $("#zoom").attr('src', 'img/zoom.svg');
    }
}

function ShowOrders() {
    let orders = $('.show');
    for (let index = 0; index < orders.length; index++) {
        const elem = orders[index];
        elem.classList.toggle('hideOrders');
    }
}