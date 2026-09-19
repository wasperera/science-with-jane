console.log("JavaScript is connected!");

const form = document.querySelector("#contact form");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const gradeInput = document.querySelector("#grade");
const messageInput = document.querySelector("#message");
const formInfo = document.querySelector("#form-info");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formInfo.style.display = "none";

    console.log("Form submitted!");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const grade = gradeInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length === 0) {
        alert("Please enter your name.");
        return;
    }
    else if (phone.length === 0) {
        alert("Please enter your phone number.");
        return;
    }
    else if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    else if (grade.length === 0) {
        alert("Please enter your grade.");
        return;
    }
    else if (message.length === 0) {
        alert("Please enter your message.");
        return;
    }
    else {
        const formMessage = `Name: ${name}
        Phone: ${phone}
        Grade: ${grade}
        Message: ${message}`;
                             
        formInfo.textContent = formMessage;
        form.reset();
        formInfo.style.display = "block"; 
    }
})