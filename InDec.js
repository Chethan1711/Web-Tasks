let likesbtn=document.querySelector('#likes-btn');
let dislikesbtn=document.querySelector('#dislikes-btn');
let likesdisplay=document.querySelector('#likes');
let dislikesdisply=document.querySelector('#dislikes');
let totaldispley=document.querySelector('#Total')




let likes=0;
let dislikes=0;
let total=0;



likesdisplay.textContent=likes;
dislikesdisply.textContent=dislikes;
totaldispley.textContent=total;

likesbtn.addEventListener('click',function()
{
    likes++;
    likesdisplay.textContent=likes;
    total++;
    totaldispley.textContent=total;
})

dislikesbtn.addEventListener('click',function()
{
    dislikes++;
    dislikesdisply.textContent=dislikes;
    total++;
    totaldispley.textContent=total;
})





let likes2=document.getElementById('#')

