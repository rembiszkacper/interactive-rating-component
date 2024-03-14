document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".submit__button");
  const card = document.querySelector(".card");
  const summary = document.querySelector(".summary");
  const ratingButtons = document.querySelectorAll(".rating-button");
  let selectedRating = 0;

  ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      ratingButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      selectedRating = parseInt(button.value);
    });
  });

  submitButton.addEventListener("click", function () {
    card.style.display = "none";
    summary.classList.remove("hidden");

    const summaryText = document.querySelector(".summary__text");
    summaryText.textContent = `You selected ${selectedRating} out of 5`;
  });
});
