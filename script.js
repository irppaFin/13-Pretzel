document.addEventListener("DOMContentLoaded", function () {});

var linkElement = document.createElement("a");
linkElement.textContent = "history";
linkElement.href = "https://example.com";
var linkContainer = document.getElementById("linkContainer");
linkContainer.appendChild(linkElement);
