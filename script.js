// Get form elements
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

// Submit button click event
btn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent page reload

    const age = ageInput.value.trim();
    const username = nameInput.value.trim();

    // Validation: empty inputs
    if (age === "" || username === "") {
        alert("Please enter valid details.");
        return;
    }

    // Create a promise with 4-second delay
    const votePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(age) > 18) {
                resolve(`Welcome, ${username}. You can vote.`);
            } else {
                reject(`Oh sorry ${username}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle promise output
    votePromise
        .then((message) => alert(message))
        .catch((errorMessage) => alert(errorMessage));
});


