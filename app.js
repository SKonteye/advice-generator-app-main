const adviceT = document.querySelector('#adviceT');
const resbtn = document.querySelector('#btn');
const idN = document.querySelector('h5')




fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData => {
    const adviceObj = adviceData.slip;
    adviceT.innerText = adviceObj.advice;
    idN.innerText = "Advice #"+adviceObj.id
    
})
