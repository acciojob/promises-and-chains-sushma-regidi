document.addEventListener("DOMContentLoaded", function () {

    // Get form elements
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function (event) {
        event.preventDefault(); // prevent reload

        const age = ageInput.value.trim();
        const username = nameInput.value.trim();

        // Validation
        if (age === "" || username === "") {
            alert("Please enter valid details");
            return;
        }

        // Promise with 4-second delay
        const votePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Number(age) > 18) {
                    resolve(`Welcome, ${username}. You can vote.`);
                } else {
                    reject(`Oh sorry ${username}. You aren't old enough.`);
                }
            }, 4000);
        });

        votePromise
            .then(msg => alert(msg))
            .catch(err => alert(err));
    });

});



