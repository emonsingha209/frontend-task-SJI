document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      button.classList.add("active");
      const targetPane = document.getElementById(button.dataset.target);
      targetPane.classList.add("active");
    });
  });
});
