const listWord = ["Пузырь", "Телепузики", "Морская свинка", "Выхухоль", "Скунс", "Сумасшедшая белка", "Сиреневенький носок", "Золотой унитаз", "Чупакабра"];


function ger() {
    document.getElementsByClassName('.button').addEventListener("click", generateWord);
    function generateWord() {
        const randomIndex = Math.floor(Math.random() * listWord.length);
        const wordElement = document.getElementsByTagName('p');
        wordElement.textContent = listWord[randomIndex];
    };
}

generateWord();
ger();