const query = require("../config/mysql.conf");
const bcrypt = require("bcrypt");

async function login(res, username, password) {
  //! Grab a user from the table with the provided username
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (!user) {
      //! If there isn't one send an error back
      return res.send({
        data: null,
        success: false,
        error: "Invalid username or password",
      });
    }
    //! Compare provided password to hashed (from database)
    const match = await bcrypt.compare(password, user.password);
    //! If they don't match, send an error back
    if (!match) {
      return res.send({
        data: null,
        success: false,
        error: "Invalid username or password",
      });
    }
    //! Otherwise send back the "sanitized" user
    return res.send({
      data: {
        id: user.id,
        username: user.username,
        truckName: user.truck_name,
      },
      success: true,
      error: null,
    });
  } catch (err) {
    //! Handle errors in catch block
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function register(res, username, password, truckName) {
  try {
    //! Grab a user from the table with the provided username or truck name
    const [user] = await query(
      "SELECT * FROM users WHERE users.username = ? OR users.truck_name = ? ",
      [username, truckName]
    );
    if (user) {
      //! If there IS one send an error back
      return res.send({
        data: null,
        success: false,
        error: "Username OR Truck Name already in use",
      });
    }
    //! Hash the plain text password
    const hashed = await bcrypt.hash(password, 10);
    //! Add the new user to the table
    await query(
      "INSERT INTO users (username, password, truck_name) VALUES (?,?,?)",
      [username, hashed, truckName]
    );
    return res.send({
      data: "Successfully Registered!",
      success: true,
      error: null,
    });
  } catch (err) {
    //! Handle errors in catch block
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function usersByIds(res, userIds=[]) {
  //! Grab all users based on ID's
  try {
    let placeHolders, users 
    if (userIds.length > 0) {
       placeHolders = userIds.map((userId) => "?");
       console.log("placeholders", placeHolders)
       const queryString = "SELECT * FROM users WHERE id IN("+ placeHolders.join(",") + ")"
        console.log("queryString", queryString)
       users = await query(
        queryString,
        userIds
      );
      console.log("placeHolders: ", placeHolders);
    }

    //! Send back list of events or an empty array
    return res.send({
      data: users || [],
      success: true,
      error: null,
    });
  } catch (err) {
    //! Handle errors in catch block
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { login, register, usersByIds };
