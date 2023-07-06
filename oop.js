// Object Oriented Programming

class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.username = uName;
    this.password = uPassword;
  }

  greet() {
    console.log(`Hi, I am ${this.username}.`);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.querySelector("#user-input");
    this.usernameInput = document.querySelector("#username");
    this.passwordInput = document.querySelector("#password");
    this.form.addEventListener("submit", this.signupHandler.bind(this));
  }

  signupHandler(e) {
    e.preventDefault();
    const usernameValue = this.usernameInput.value;
    const passwordValue = this.passwordInput.value;

    if (
      !Validator.validate(usernameValue, Validator.REQUIRED) ||
      !Validator.validate(passwordValue, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid Input - username or password is incorrect(password must be at least six characters long)."
      );
      return;
    }

    const newUser = new User(usernameValue, passwordValue);
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();


//Inspired by: https://www.youtube.com/watch?v=aoE-92Ac4zE