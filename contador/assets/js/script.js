var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

document.querySelector('#add').addEventListener('click',increment)
document.querySelector('#sub').addEventListener('click',decrement)

function increment(){
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumberWrapper.style.color = 'green';
    }
}

function decrement(){
    if(currentNumber >= 1){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if(currentNumber <= 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumberWrapper.style.color = 'red';
    }
}
