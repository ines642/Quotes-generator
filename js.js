window.onload=function(){
//select qt
const  qt1 =document.querySelector('.qt1')
const qt2=document.querySelector('.qt2')
const qt3 =document.querySelector('.qt3')
const qt4 =document.querySelector('.qt4')
const qt5 =document.querySelector('.qt5')
//select btn
const btn =document.querySelector('.generator')
//verify that it works
console.log(qt1);
//code
var i =0
const quote = [qt1 ,qt2 ,qt3,qt4,qt5]
quote[i].style.display='block'
generator=()=>{
    if(i<4){
    quote[i].style.display='none'
    quote[i+1].style.display='block'
    i+=1
}
else{
    quote[4].style.display='none'
    i=0
    quote[i].style.display='block'
    
}
}

btn.addEventListener('click' , generator)


}