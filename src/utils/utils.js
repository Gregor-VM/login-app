export const validateSignIn = (
  email,
  password,
  setEmailError,
  setPasswordError
) => {
  let emailNotError = false;
  let passNotError = false;
  if (email === "") {
    setEmailError("Email field can't be empty");
  } else {
    emailNotError = true;
    setEmailError(undefined);
  }

  if (password === "") {
    setPasswordError("Password field can't be empty");
  } else if (password.length < 6) {
    setPasswordError("The password is too short");
  } else {
    passNotError = true;
    setPasswordError(undefined);
  }

  return [emailNotError, passNotError];
};

export const validateSignUp = (
  email,
  password,
  setEmailError,
  setPasswordError,
  confirm
) => {
  let emailNotError = false;
  let passNotError = false;

  if (email === "") {
    setEmailError("Email field can't be empty");
  } else {
    setEmailError(undefined);
    emailNotError = true;
  }

  if (password === "") {
    setPasswordError("Password field can't be empty");
  } else if (password !== confirm) {
    setPasswordError("The password doesn't match");
  } else if (password.length < 6) {
    setPasswordError("The password is too short");
  } else {
    setPasswordError(undefined);
    passNotError = true;
  }

  return [emailNotError, passNotError];
};
