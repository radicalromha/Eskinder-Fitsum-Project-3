const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "none" || content.style.display === ""
        ? "block"
        : "none";
  });
});
