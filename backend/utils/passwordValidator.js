export const validatePassword = (password) => {
  if (password.length < 8)
    throw new Error("Password should have at least 8 character ");

  if (!/[A-Z]/.test(password))
    throw new Error("Password should have at least one upperCase character");

  if (!/[a-z]/.test(password))
    throw new Error("Password should have at least one lowerCase character");

  if (!/\d/.test(password)) throw new Error("Password should have at last one digit");

  if (!/[!@#$%^&*]/.test(password))
    throw new Error("Password should contain at least one charcter");
};
