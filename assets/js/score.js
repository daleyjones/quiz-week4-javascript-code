function onbackToQuiz() {
    window.location.href = 'index.html';
  
    for (var i = 0; i < localStorage.length; i++) {
      var initials = localStorage.key(i);
      var score = localStorage.getItem(initials);
  
      var result = document.createElement("div");
      result.classList.add('result');
  
      result.innerHTML = `<div class="highscores">${initials}</div>
                          <div class="highscores">${score}</div>`;
  
      scoresheet.appendChild(result);
    }
  }
  
  backtoQuiz.addEventListener("click", onbackToQuiz);
  