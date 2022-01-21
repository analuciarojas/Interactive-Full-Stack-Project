const quizId = document.querySelector('input[name="quiz-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="quiz-title"]').value;
  const body = document.querySelector('textarea[name="quiz-body"]').value;

  await fetch(`/api/quiz/${quizId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const deleteClickHandler = async function () {
  await fetch(`/api/quiz/${quizId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
