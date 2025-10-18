// Added proper items for DOM manipulation.
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const submitButton = document.getElementById("submit");
const userCharacters = document.getElementById("usernameCount");
const emailCharacters = document.getElementById("emailCount");
const commentCharacters = document.getElementById("commentCount");
const feedbackDisplay = document.getElementById("feedbackDisplay");

// Added event listeners with 'input' to actively change character count on website. No longer in use because of bubbling and delegation.
/* username.addEventListener('input', () => {
    userCharacters.textContent = username.value.length
});

email.addEventListener('input', () => {
    emailCharacters.textContent = email.value.length
});

comments.addEventListener('input', () => {
    commentCharacters.textContent = comments.value.length
}); */

// Added Tooltips when user hovers textbox
username.addEventListener('mouseover', () => {
    username.title = "Please input your username."
});

username.addEventListener('mouseout', () => {
    username.title = ""
});

email.addEventListener('mouseover', () => {
    email.title = "Please input your Email."
});

email.addEventListener('mouseout', () => {
    email.title = ""
});

comments.addEventListener('mouseover', () => {
    comments.title = "Please input any comments or concerns."
});

comments.addEventListener('mouseout', () => {
    comments.title = ""
});

// Added it so users could not submit without all fields and text value was appended onto the page.
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value === "" || email.value === "" || comments.value === "") {
        alert ("All fields are required.");
        return;
    }
    const entry = document.createElement("div");
    entry.textContent = `Username: ${username.value} Email: ${email.value} Comments: ${comments.value}`;
    feedbackDisplay.appendChild(entry);
});

// Added bubbling and delegation for streamlined character counting
document.querySelector("div").addEventListener('input', (e) => {
    if(e.target.id === "username") {
        userCharacters.textContent = e.target.value.length
    } else if (e.target.id === "email") {
        emailCharacters.textContent = e.target.value.length
    } else if (e.target.id === "comments") {
        commentCharacters.textContent = e.target.value.length
    }
    e.stopPropagation();
});