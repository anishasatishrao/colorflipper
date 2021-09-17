const colors = ["blue","aqua","red","pink"];
const btn=document.getElementById('btn');
const color = document.querySelector("color");

btn.addEventListener('click',function(){
     const randomnumber = getrandomnumber();
     document.body.style.backgroundColor = colors[randomnumber];
     color.textContent = colors[randomnumber];

});

function getrandomnumber()
{
    return Math.floor( Math.random()*colors.length);
}