let submit = document.querySelector('.form__submit-button');
let reset = document.querySelector('.form__reset-button');

let infoBlockMessage = document.querySelector('.counter__result')
let sustenance = document.querySelector('#calories-norm');
let diet = document.querySelector('#calories-minimal');
let gain = document.querySelector('#calories-maximal');

let activity = 1.2;
let gender = 'Мужчина';
let age = 0;
let height = 0;
let weight = 0;

function createInfoBlock(gender, age, height, weight, activity) {
    infoBlockMessage.classList.remove('counter__result--hidden');
    if (gender === 'Мужчина') {
        sustenance.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age + 5) * activity));
        diet.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age + 5) * activity* 0.85));
        gain.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age + 5) * activity* 1.15));
    } else {
        sustenance.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age - 161) * activity));
        diet.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age - 161) * activity* 0.85));
        gain.textContent = String(Math.ceil((10 * weight + 6.25 * height - 5 * age - 161) * activity* 1.15));
    }
}

function checkRadio() {
    let radios = document.querySelectorAll('input[name="activity"]');
    for (let radio of radios) {
        if (radio.checked) {
            switch (radio.value) {
                case 'low':
                    activity = 1.375;
                    break;
                case 'medium':
                    activity = 1.55;
                    break;
                case 'high':
                    activity = 1.725;
                    break;
                case 'max':
                    activity = 1.9;
                    break;
                default:
                    activity = 1.2;
                    break;
            }
        }
    }
}
submit.onclick = checkRadio;

function activeButtons() {
    if (age !== 0 || height !== 0 || weight !== 0) {
        reset.removeAttribute('disabled');
    } else reset.setAttribute('disabled', 'disabled');
    if (age !==0 && height !== 0 && weight !== 0) {
        submit.removeAttribute('disabled');
    } else submit.setAttribute('disabled','disabled');
}

document.querySelector('#gender-male').addEventListener("click", function () {
    gender = 'Мужчина';
});

document.querySelector('#gender-female').addEventListener("click", function () {
    gender = 'Женщина';
});

document.querySelector('#age').addEventListener("input", function() {
    age = Number(this.value);
    activeButtons();
});

document.querySelector('#height').addEventListener("input", function() {
    height = Number(this.value);
    activeButtons();
});

document.querySelector('#weight').addEventListener("input", function() {
    weight = Number(this.value);
    activeButtons();
});

submit.addEventListener("click", function (evt) {
    evt.preventDefault();
    createInfoBlock(gender,age,height,weight,activity);
});

reset.addEventListener("click", function (){
    activity = 1.2;
    gender = 'Мужчина';
    age = 0;
    height = 0;
    weight = 0;
    infoBlockMessage.classList.add('counter__result--hidden');
});





