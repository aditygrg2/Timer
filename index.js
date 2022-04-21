var timer = 0;
let first = document.getElementById('top');
let second = document.getElementById('next');
var value = 0;

document.getElementsByTagName('button')[0].addEventListener('click',function(){
    value++;
    timer = parseInt(document.getElementById('inputKey').value)
    console.log(timer);
    if(value===1 && timer>0) {
        var interval = setInterval(function(){
            document.getElementById('tag').innerText = "Timer in progress!";
            second.classList.add('-translate-y-20','transition-transform','duration-1000');
            second.addEventListener('transitionend',function(){
            console.log("call");
            second.innerText = parseInt(second.innerText);
            first.innerText = parseInt(second.innerText);
            second.classList.remove('transition-transform','duration-1000','-translate-y-20');
            second.innerText= parseInt(second.innerText)+1;
        },{once: true})
        
        if(second.innerText > timer){
            clearInterval(interval);
            console.log("Terminated");
            value--;
            second.innerText = 0;
            document.getElementById('tag').innerText = "Enter value!";
        }
    
        },2000)
    }

    else if(timer<=0){
        document.getElementById('tag').innerText = "Please enter value greater than 0!";
        value--;
    }

    else if(!timer){
        document.getElementById('tag').innerText = "Please enter value!";
        value--;
    }

    // Blank number is NaN which is boolean by default which means it is false!

    else if(value==2){
        document.getElementById('tag').innerText = "Timer is already in progress. Please wait!";
        value--;
    }

    else if(value==3){
        document.getElementById('tag').innerText = "Timer reset successful!";
        value = 0;
    }
},)