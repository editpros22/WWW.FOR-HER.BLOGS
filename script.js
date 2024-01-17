function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace "your_password" with the actual password you want to use
    if (password === "ateeb") {
        window.location.href = "nextindex.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

