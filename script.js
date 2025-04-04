document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("messageStatus").textContent = "Thank you! Your message has been sent.";
    document.getElementById("messageStatus").style.color = "lightgreen";

    setTimeout(() => {
        document.getElementById("messageStatus").textContent = "";
    }, 3000);
});
