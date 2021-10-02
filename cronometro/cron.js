var hh = 0 
var mm = 0
var ss = 0
var cron;

function start(){
    clearInterval(cron)
    cron = setInterval(() => {timer(); 
    }, 1000)

}

function pause(){
    clearInterval(cron)
}

function stop(){
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.getElementById('counter').innerText = '00:00:00';
}

function timer(){

    ss++

    if(ss == 60){
        mm++;
        ss == 0;

        if(mm == 60){
            hh++;
            mm = 0
        }
    }


    var format = (hh < 10? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

    document.getElementById('counter').innerText = format

    return format;
}
