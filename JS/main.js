
function Col1(){
    document.getElementsByClassName('sec1')[0].style.background = '#E44CEB';
}

function Col2(){
    document.getElementsByClassName('sec1')[0].style.background = '#5073D0';
}

function Col3(){
    document.getElementsByClassName('sec1')[0].style.background = '#7a28d8';
}

function Col4(){
    document.getElementsByClassName('sec1')[0].style.background = '#414141';
}

function ColR(){
    document.getElementsByClassName('sec1')[0].style.background = '';
}



setInterval(() => {

    let time = new Date();
    document.getElementById('time').innerHTML = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}, 1000);


setInterval(() => {
}, 1000);

    let date = new Date();
    document.getElementById('date').innerHTML = date.toDateString('en-US', { day: 'numeric', month: 'string', year: 'numeric'});