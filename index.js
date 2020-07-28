var count=document.getElementById("count"),//span
stop=document.getElementById("stop"),
text = document.getElementById("text"),//textarea 
textMaxValue=text.getAttribute("maxlength");//maxlength of the textaera to decrease from


text.oninput=function(){
    count.innerHTML=textMaxValue-this.value.length;//legth is the inputted text length
    if(count.innerHTML==0){

        count.classList.add("finish")
        stop.innerHTML="you can not input more "
    }
        else{
            count.classList.remove("finish");
    }
}