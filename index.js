var i =0;
var a = 0;
var time= 5000;
var slide = [];
var text= [];

var texting=document.querySelector("#slide-text");
var sliding=document.querySelector("#slider");

text[0]= 'Tonimas Aluminium';
text[1]= 'Energy For Every One';
text[2]= 'Reservour';
text[3]= 'Brewery Production';

slide[0]='./pics/aluminium.jpg';
slide[1]='./pics/filling.jpg';
slide[2]='./pics/reservour.jpg';
slide[3]='./pics/manufcturing.jpg';


function imageSlider() {
    sliding.src=slide[i];
    if (i<slide.length-1) {
        i++
    }
    else{
        i=0;
    }
    setTimeout("imageSlider()",time);
}
function textSlider() {
    texting.innerHTML= text[a];
    if (a<text.length-1) {
        a++;
    }
    else{
        a=0;
    }
    setTimeout("textSlider()",time);
}
window.onload = textSlider();
window.onload = imageSlider();