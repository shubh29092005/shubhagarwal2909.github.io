// Contact button functionality
document.getElementById("contactBtn").addEventListener("click", function() {
    var contactText = document.getElementById("contactText");
    if (contactText.classList.contains("hidden")) {
        contactText.classList.remove("hidden");
    } else {
        contactText.classList.add("hidden");
    }
});
