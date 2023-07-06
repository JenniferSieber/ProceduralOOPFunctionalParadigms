// Functional 

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.querySelector(inputElementId).value;
}

function createUser(username, password) {
  if (!validate(username, REQUIRED) || !validate(password,MIN_LENGTH, 5)) {
    throw new Error("Invalid Input - username or password is incorrect(password must be at least six characters long).");
  }
  return {
    username: username,
    password: password
  }
}

function greet(user) {
  console.log(`Hi, I am ${user.username}`);
}

function signupHandler(e) {
  e.preventDefault();

  const usernameValue = getUserInput('#username');
  const passwordValue = getUserInput('#password');

  try {
    const newUser = createUser(usernameValue, passwordValue);
    console.log(newUser);
    greet(newUser);
  } catch(err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.querySelector(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('#user-input', signupHandler);

//Inspired by: https://www.youtube.com/watch?v=aoE-92Ac4zE