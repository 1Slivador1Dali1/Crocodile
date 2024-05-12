const listWord = ["Пузырь", "Телепузики", "Морская свинка", "Выхухоль", "Скунс", "Сумасшедшая белка", "Сиреневенький носок", "Золотой унитаз", "Чупакабра"];

function insertRandomStringFromArray(listWord, selector) {
    let element = document.querySelector(selector);

    if (element) {
        element.textContent = listWord[Math.floor(Math.random() * listWord.length)];
    }
    else {
        console.error('Элемент с данным селектором не найден');
    }
}

function handleButtonClick() {
    let strings = listWord;
    let selector = '#word-text';
    insertRandomStringFromArray(strings, selector);
}

let buttonGenerate = document.querySelector('button');
buttonGenerate.addEventListener('click', handleButtonClick);


// function ger() {
//     document.getElementsByClassName('.button').addEventListener("click", generateWord);
//     function generateWord() {
//         const randomIndex = Math.floor(Math.random() * listWord.length);
//         const wordElement = document.getElementsByTagName('p');
//         wordElement.textContent = listWord[randomIndex];
//     };
// }

// generateWord();
// ger();