
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 100;

// Chọn các phần tử từ DOM
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const bodyEl = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Hàm hiển thị thông báo
const displayMessage = function(message) {
    messageEl.textContent = message;
};

// Xử lý sự kiện khi nhấn nút "Check!"
checkBtn.addEventListener('click', function() {
    const guess = Number(guessInput.value);

    // Kiểm tra nếu không có dự đoán
    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        // Khi người chơi đoán đúng
        displayMessage('Correct Number!');
        numberEl.textContent = secretNumber;

        // Thay đổi màu nền và kích thước số
        bodyEl.style.backgroundColor = '#60b347';
        numberEl.style.width = '30rem';
    } else if (guess !== secretNumber) {
        // Khi người chơi đoán sai
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score = score - 20;
            scoreEl.textContent = score;
            if (score === 0) {
                displayMessage('You lost the game!');
            }
        }
    }
});

// Xử lý sự kiện khi nhấn nút "Again!"
againBtn.addEventListener('click', function() {
    // Khôi phục giá trị ban đầu
    score = 100;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    // Khôi phục điều kiện ban đầu của các phần tử
    displayMessage('Start guessing...');
    numberEl.textContent = '?';
    scoreEl.textContent = score;
    guessInput.value = '';

    // Khôi phục màu nền và kích thước số
    bodyEl.style.backgroundColor = '#222';
    numberEl.style.width = '15rem';
});