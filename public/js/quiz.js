async function loginFormHandler(event) {
    event.preventDefault();
  
    const quizzes = document.querySelector('#quiz').value.trim();
  
    if (quizzes) {
      const response = await fetch('/api/users/Quiz.js', {
        method: 'post',
        body: JSON.stringify({
          quizzes
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
