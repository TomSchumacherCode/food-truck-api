function validate(req, res, next) {
  const { username, password } = req.body;
  if (
    !username ||
    !password ||
    username.length < 5 ||
    username.length > 20 ||
    password.length < 5 ||
    password.length > 20
  ) {
    return res.send({
      data: null,
      success: false,
      error: "Invalid data provided",
    });
  }
  return next();
}

module.exports = validate;
