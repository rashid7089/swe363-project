function validatePassword(password) {
    // Password must be at least 8 characters long, contain one uppercase letter,
    // one lowercase letter, one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
  
module.exports = validatePassword;