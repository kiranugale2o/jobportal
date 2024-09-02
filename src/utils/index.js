//Check password format
export function passwordChecker(e) {
  let password = e.target.value.trim();

  // This regex matches specific special characters like @, #, $, %, &, etc.
  const specificSpecialCharRegex = /[@#$%^&*()_+[\]{};':"\\|,.<>?]/;
  if (password.length >= 6) {
    if (!specificSpecialCharRegex.test(password)) {
      const msg = {
        status: false,
        message: "At least One Special character add in Password !",
      };
      return msg;
    }
    const msg = {
      status: true,
      message: "Strong Password !",
    };
    return msg;
  } else {
    const msg = {
      status: false,
      message: "Password must be 6 character !",
    };
    return msg;
  }
}
