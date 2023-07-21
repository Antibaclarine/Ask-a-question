document.addEventListener('DOMContentLoaded', () => {
    const chatlog = document.querySelector('.chatlog');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
  
    button.addEventListener('click', () => {
      const question = input.value;
      input.value = '';
      const answer = getAnswer(question);
      displayMessage(question, 'user');
      displayMessage(answer, 'bot');
    });
  
    function getAnswer(question) {
      // Code to generate answer goes here
      return 'I am sorry, I do not understand your question.';
    }
  
    function displayMessage(message, sender) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = message;
      div.appendChild(p);
      div.classList.add(sender);
      chatlog.appendChild(div);
    }
  
    input.addEventListener('keydown', function(event) {
      if (event.code === 'Enter') {
        event.preventDefault();
        search();
      }
    });
  
    function search() {
      const inputValue = input.value;
      const encodedInput = encodeURIComponent(inputValue);
      window.location.href = `https://www.google.com/search?q=${encodedInput}`;
    }
  });
  