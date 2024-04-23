let color=document.getElementById("color")
let container=document.getElementById("container")
let button=document.getElementById("cl")
let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',display)
function display(){
    let disp="#"
    for(let i=0;i<6;i++)
    {
       let num=hex[Math.floor(Math.random()*15)+1]
       disp+=num
    }
    color.innerHTML=disp
    container.style.backgroundColor=disp
}
function colors(){
    let random=Math.floor(Math.random()*15)+1
    return hex[random]
}