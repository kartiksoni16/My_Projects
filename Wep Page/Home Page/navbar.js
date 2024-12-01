document.getElementById("signupRedirect").addEventListener("click", function () {
    window.location.href = "Sign Up/signup.html"; // Redirect to signup page
});


document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const contactSection = document.getElementById("contactSection");
    
    // Toggle visibility of the Contact Us section
    if (contactSection.style.display === "none" || contactSection.style.display === "") {
        contactSection.style.display = "block";
    } else {
        contactSection.style.display = "none";
    }
});
