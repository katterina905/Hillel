window.onload = function() {
    console.log( 'Документ и все ресурсы загружены' );


    function time() {
        var date = new Date();
        var time = date.getHours() + ' ' + date.getHours() + ' ' + date.getSeconds();
        var b = document.getElementById('t');
        b.innerHTML = time ;
    }

    function year() {
        var date = new Date();
        var year = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
        var b = document.getElementById('t');
        b.innerHTML = year ;
    }

    var clock = document.getElementById('clock');


    function start() {

        var blockCondition = clock.getAttribute("data-info");

        if(blockCondition == 'time'){
            clearInterval(refreshYear);
            refreshTime =  setInterval(time, 1000);
            clock.setAttribute("data-info", "year");

        }else {
            clearInterval(refreshTime);
            refreshYear =  setInterval(year, 890);
            clock.setAttribute("data-info", "time");

        }
    }

    clock.addEventListener('click', start, false);

};





