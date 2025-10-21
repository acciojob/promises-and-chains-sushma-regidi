//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();
  const age = parseInt(ageInput, 10);

  if (!nameInput || ageInput === "" || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  function checkVotingEligibility(name, age) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren’t old enough.`);
        }
      }, 4000);
    });
  }

  checkVotingEligibility(nameInput, age)
    .then(message => {
      alert(message);
    })
    .catch(errorMessage => {
      alert(errorMessage);
    });
});

