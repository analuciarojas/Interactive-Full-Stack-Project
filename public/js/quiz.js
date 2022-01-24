// async function loginFormHandler(event) {
//     event.preventDefault();
  
//     const quizzes = document.querySelector('#quiz').value.trim();
  
//     if (quizzes) {
//       const response = await fetch('/api/users/Quiz.js', {
//         method: 'post',
//         body: JSON.stringify({
//           quizzes
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }


  const newFormHandler = async function(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="quiz-title"]').value;
    const body = document.querySelector('textarea[name="quiz-body"]').value;
    await fetch(`/api/quiz`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/');
  };
  document
    .querySelector('#new-quiz-form')
    .addEventListener('submit', newFormHandler);
  
  
  
  
  
  
  
  
  
  