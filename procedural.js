//Procedural

const form = document.querySelector('#user-input');

function signupHandler(e) {
  e.preventDefault(); //1

  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  if (usernameValue.trim().length === 0) {
    alert('Invalid input - username field must not be empty.')
    return; 
  }

  if (passwordValue.trim().length <= 5) {
    alert('Invalid input - password field must be atleast six characters long.')
    return; 
  }
  
  const user = {
    username: usernameValue,
    password: passwordValue
  };
  console.log(user)
  console.log(`Hi, I am ${usernameValue}.`)
}

form.addEventListener('submit', signupHandler);

// Inspired by: https://www.youtube.com/watch?v=aoE-92Ac4zE