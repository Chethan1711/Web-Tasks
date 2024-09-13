let timeTag=document.querySelector('#time');
let dateTag=document.querySelector('#date');
let timezoneTag=document.querySelector('#timezone');



function timer()
{
let dt=new Date();


let time=dt.toLocaleTimeString();
let date=dt.toLocaleDateString();


timeTag.textContent=time;
dateTag.textContent=date;
timezoneTag.textContent="Kolkatha/chennai"


}

setInterval(timer(),1000);



