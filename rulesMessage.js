document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let message = document.createElement("div")
        message.textContent = "This is a message!"
        message.id = "message"
        document.body.appendChild(message);
    }, 10000)
});