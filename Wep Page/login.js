// const submitbutton= () =>
// {
//     alert("Submit the value")
// }

// function submitbutton()
// {
//     alert("Loging the Page")
// }

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the username value
    const username = document.getElementById("username").value;

    // Show an alert with the username
    // alert(`Username: ${username}`);
    // window.location.href = navbar.hm;
    window.location.href = "Home Page/navbar.html";
}
