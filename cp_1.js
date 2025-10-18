// Added proper items for DOM manipulation
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const submitButton = document.getElementById("submit");
const userCharacters = document.getElementById("usernameCount");
const emailCharacters = document.getElementById("emailCount");
const commentCharacters = document.getElementById("commentCount");

// Added event listeners with 'input' to actively change character count on website
username.addEventListener('input', () => {
    userCharacters.textContent = username.value.length
});

email.addEventListener('input', () => {
    emailCharacters.textContent = email.value.length
});

comments.addEventListener('input', () => {
    commentCharacters.textContent = comments.value.length
});

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
