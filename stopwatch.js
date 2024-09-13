let minTag=document.querySelector("#min");
let secTag=document.querySelector("#sec");
let msecTag=document.querySelector("#mSec");
let startbtn=document.querySelector("#start");
let stopbtn=document.querySelector("#stop");
let restartbtn=document.querySelector("#restart");

minTag.textContent="00";
secTag.textContent="00";
msecTag.textContent="00";


let min=0;
let sec=60;
let msec=0;

let temp=false;

//timer function

function timer()
{
    msec=msec+10;
    if(msec===1000)
        {
            sec=sec-1;
            msec=0;
            if(sec===0)
                {
                    min+=1;
                    sec=60;
                }
        }

        minTag.textContent=concatZero(min);
        secTag.textContent=concatZero(sec);
        msecTag.textContent=concatZero(msec);

}

//start function
let intervel=null;
startbtn.addEventListener('click',()=>
{
    if(!temp)
        {
            intervel=setInterval(timer,10);
            temp=true;
            
        }
        


});

function concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;

}

//stopbtn


stopbtn.addEventListener('click',()=>
{
   if(temp)
    {
        clearInterval(intervel);
        temp=false;

    }

});



//function restart
restartbtn.addEventListener('click',()=>
{
    clearInterval(intervel);
    temp=false;
    min=0;
    sec=0;
    msec=0;
    minTag.textContent="00";
    secTag.textContent="00";
    msecTag.textContent="00";

});


