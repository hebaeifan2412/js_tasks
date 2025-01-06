function toggleMode() {
    var body = document.body;
    var currentClass = body.className;
    var icon = document.getElementById("toggle-icon");
    
    if (currentClass === "dark-mode") {
        body.className = "";
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        body.style.backgroundColor = "#fff";
        sessionStorage.setItem("mode", "light"); // Save the mode preference for the session
    } else {
        body.className = "dark-mode";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        body.style.backgroundColor = "#333";
        sessionStorage.setItem("mode", "dark"); // Save the mode preference for the session
    }
}

// Load the saved mode when the page loads (if present in session storage)
window.onload = function() {
    var savedMode = sessionStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.className = "dark-mode";
        document.getElementById("toggle-icon").classList.remove("fa-moon");
        document.getElementById("toggle-icon").classList.add("fa-sun");
        document.body.style.backgroundColor = "#333";
    }
};
$("div").css("color","red");