// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click',() =>{
//         nav.classList.add('active');
//     })
// }
// if (close) {
//     close.addEventListener('click',() =>{
//         nav.classList.remove('active');
//     })
// }

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();  
        return false;
    }

    alert("Email is valid. Proceeding...");
    return true;
}


// Get the elements needed
const navbar = document.getElementById('navbar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');

// Toggle the navbar when the hamburger icon is clicked
bar.addEventListener('click', () => {
    navbar.classList.add('active');  // Add 'active' class to show the menu
});

// Close the navbar when the close icon is clicked
close.addEventListener('click', () => {
    navbar.classList.remove('active');  // Remove 'active' class to hide the menu
});
