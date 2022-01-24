const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="quiz-title"]').value;
  const questions = document.querySelector(
    'textarea[name="quiz-questions"]'
  ).value;
  const body = document.querySelector('textarea[name="quiz-body"]').value;

  await fetch(`/api/quiz`, {
    method: "POST",
    body: JSON.stringify({
      title,
      questions,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
};
document
  .querySelector("#new-quiz-form")
  .addEventListener("submit", newFormHandler);
