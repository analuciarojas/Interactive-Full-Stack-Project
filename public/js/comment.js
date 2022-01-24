const commentFormHandler = async function (event) {
  event.preventDefault();

  const quizId = document.querySelector('input[name="quiz-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        quizId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
