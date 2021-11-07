// Example of setTimeout() 1:
console.log(1);
setTimeout(() => {
    console.log(2);
}, 5000);
console.log(3);
console.log(4);


// Example of setTimeout() 2:
let timeoutID;

function setOutput(outputContent) {
    document.querySelector('#output').textContent = outputContent;
  }
  

function delayMessage() {
    setOutput('');
    timeoutID = setTimeout(setOutput, 2000, "Far too slow...");
}

function clearMessage() {
    clearTimeout(timeoutID);
}


// Example of setInterval() 1:
let intervalID;

function changeColor() {
    if(!intervalID) {
        intervalID = setInterval(flashText, 500)
    }
}

function flashText() {
    const boxElem = document.querySelector("#colorBox");
    if(boxElem.className === "go") {
        boxElem.className = "stop";
    }else {
        boxElem.className = "go";
    }
}

function stopTextColor() {
    clearInterval(intervalID);
    intervalID = null;
}

// let startButton = document.getElementById('#start');
// startButton.addEventListener('click', changeColor());

// let stopButton = document.getElementById('#stop');
// stopButton.addEventListener('click', stopTextColor());


// Task 1:
// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ქვემოთ მობმული სურათი (საათი.png)

setInterval(disLocalTime, 1000);

function disLocalTime() {
    let localDisplay = new Date();
    document.querySelector("#localTime").innerHTML = localDisplay.toLocaleTimeString();
}


// Task 2:
// 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ: 
//    1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
//    2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს 
//    დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event  


const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if(e.code === 'ArrowRight'){
    nextSlide();
  }
  if(e.code === 'ArrowLeft'){
    prevSlide();
  }
});

let intervalId = null;

function startAutoSliding() {
  if(!intervalId){
    intervalId = setInterval(() => {
      nextSlide();
    }, 2000);
  }
}

/////////////////////////////////////////////////////////////////
const mouseTarget = document.querySelector(".slide-item");

function stopAutoSliding() {
  if(startAutoSliding) {
    clearInterval(intervalId);
    intervalID = null;
  }
}

mouseTarget.addEventListener('mouseenter', startAutoSliding);
//////////////////////////////////////////////////////////////////

stopBtn.addEventListener('click', stopAutoSliding);
startBtn.addEventListener('click', startAutoSliding);


// Task 4:
// 4. (optionsal) მოცემულია რიცხვების მასივი const students = [-1, -3, 4, 2], დაწერეთ ფუნქცია angryProfessor(k, stundent){} რომელსაც გადაეცემა 2 პარამეტრი k - (მინიმალური რაოდენობა სტუდენტების რომ ლექცია ჩატარდეს) და students (სტუდენტების მასივი რიცხვების სახით)
//  განმარტება: - students მასივში 0 და ყველა ნაგატიური რიცხვი ნიშნავს რომ სტუდენტი ლექციას ესწრება 1 დან ზემოთ 2, 3 .... ნიშნავს რომ აცცენს
 
// დავალება: დავითვალოთ სტუდენტების რაოდენობა რომელიც ესწრება ლექციას
// ფუნქციიდან დავაბრუნოთ: თუ დამსწრე სტუდენტების რაოდენობა ნაკლებია k-ზე მაშინ დაბრუნდეს "YES" თუ არა მაშინ "NO"

let n = 4;
let k = 3;
const a = [-1, -3, 4, 2];

function angryProfessor(k, a) {
    let result = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0) {
            result++;
        }
    }
    if(result >= k){
      return "NO";
    }else {
      return "YES";
    }
}

console.log(angryProfessor(k, a));
