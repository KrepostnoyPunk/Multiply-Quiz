const numbers_1=Math.round(Math.random()*10);
const numbers_2=Math.round(Math.random()*10);
const questionEl=document.getElementById('question');
const formEl=document.getElementById('form')
const inputEl=document.getElementById('input')
const scoreEl=document.getElementById('score')

let score=String(localStorage.getItem('score'))
if(!score) {
    score=0
}

scoreEl.innerHTML=`score: ${score}`

questionEl.innerText=`What is ${numbers_1} multiply by ${numbers_2}?`;

const correctAnswer=numbers_1*numbers_2;

formEl.addEventListener("submit", ()=>{
    const userAnswer=+inputEl.value;
    //console.log(userAnswer, typeof userAnswer);
    if(userAnswer===correctAnswer) {
        score++
        //console.log(score);
        updateLocalStorage()

    } else {
        score--
        //console.log(score);
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem('score', String(score))
}


















