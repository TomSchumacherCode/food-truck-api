const query = require("../config/mysql.conf");

async function addFavorite(res, gif) {
  try {
    //! user_id, gif_id, title, url
    let { insertId } = await query("INSERT INTO favorites SET ?", [gif]);
    return res.send({
      data: insertId,
      success: true,
      error: null,
    });
  } catch (err) {
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function removeFavorite(res, id) {
  try {
    await query("DELETE FROM favorites WHERE favorites.id = ?", [id]);
    return res.send({
      data: null,
      success: true,
      error: null,
    });
  } catch (err) {
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function getByUserID(res, userID) {
  try {
    const gifs = await query(
      "SELECT * FROM favorites WHERE favorites.user_id = ?",
      [userID]
    );
    return res.send({
      data: gifs,
      success: true,
      error: null,
    });
  } catch (err) {
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { addFavorite, removeFavorite, getByUserID };
