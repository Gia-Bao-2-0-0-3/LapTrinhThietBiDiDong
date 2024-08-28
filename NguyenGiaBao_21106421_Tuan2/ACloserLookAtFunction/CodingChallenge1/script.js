
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
  
    registerNewAnswer() {
      const input = prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      );
  
      const answer = Number(input);
  
      if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
        this.answers[answer]++;
      } else {
        alert('Invalid input. Please enter a number between 0 and 3.');
      }
  
      this.displayResults('string');
      this.displayResults('array');
    },
  
    displayResults(type = 'array') {
      if (type === 'array') {
        console.log(this.answers);
      } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
    },
  };
  
  //Thêm nút vào DOM
  document.body.append(document.createElement('button'));
  const button = document.querySelector('button');
  button.textContent = 'Answer poll';
  
  //Thêm sự kiện lắng nghe cho nút
  button.addEventListener('click', poll.registerNewAnswer.bind(poll));
  
  //Hiển thị dữ liệu kiểm tra
  poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
  poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');