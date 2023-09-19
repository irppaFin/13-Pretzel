document.addEventListener("DOMContentLoaded", function () {});

var linkElement = document.createElement("a");
linkElement.textContent = "Example Link";
linkElement.href = "https://example.com";
var linkContainer = document.getElementById("linkContainer");
linkContainer.appendChild(linkElement);
