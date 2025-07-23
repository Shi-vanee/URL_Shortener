const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");
const shortenUrlTextarea = document.getElementById("shortenURLTextarea");

shortBtn.addEventListener('click', shortenUrl);
reloadBtn.addEventListener('click', () => location.reload());

function shortenUrl() {
  const originalUrl = document.getElementById("originalUrl").value.trim();
  console.log("Original URL:", originalUrl);


  if (!originalUrl) {
    shortenUrlTextarea.value = "Please enter a URL first.";
    return;
  }

  const apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortenUrlTextarea.value = data;
    })
    .catch(() => {
      shortenUrlTextarea.value = "Error: Unable to shorten URL.";
    });
}