let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer =false;

function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

        document.getElementById("count").innerText="00";
        document.getElementById("sec").innerText="00";
        document.getElementById("min").innerText="00";
        document.getElementById("hr").innerText="00";
}

function stopWatch(){
    if(timer == true){
        count++;
        setTimeout("stopWatch()",10)
        document.getElementById("count").innerText=count;
        document.getElementById("sec").innerText=sec;
        document.getElementById("min").innerText=min;
        document.getElementById("hr").innerText=hr;
        if(count == 100){
            sec++;
            count = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }
    
}
}



