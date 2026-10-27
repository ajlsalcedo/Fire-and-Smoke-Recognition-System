// Basic image preview only; this does not perform a prediction.
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("image-input");
  const preview = document.getElementById("preview");
  const status = document.getElementById("status");
  if (!input || !preview || !status) return;

  let currentUrl = null;
  input.addEventListener("change", () => {
    preview.replaceChildren();
    if (currentUrl) URL.revokeObjectURL(currentUrl);
    currentUrl = null;

    const file = input.files && input.files[0];
    if (!file) {
      status.textContent = "No image selected.";
      return;
    }
    if (!file.type.startsWith("image/")) {
      status.textContent = "Please choose a valid image file.";
      input.value = "";
      return;
    }

    currentUrl = URL.createObjectURL(file);
    const image = document.createElement("img");
    image.src = currentUrl;
    image.alt = "Selected image preview";
    preview.appendChild(image);
    status.textContent = `Image selected: ${file.name}. Prediction is not connected yet.`;
  });
});
