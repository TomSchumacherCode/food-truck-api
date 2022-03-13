const query = require("../config/mysql.conf");
const bcrypt = require("bcrypt");

async function eventsByUserId(res, userId) {
  //! Grab all events from this user
  try {
    const events = await query("SELECT * FROM events WHERE events.user_id = ?", [
      userId,
    ]);

    //! Send back list of events or an empty array
    return res.send({
      data: events || [],
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

async function allEvents(res) {
    //! Grab all events
    try {
      const events = await query("SELECT * FROM events");

  
      //! Send back list of events or an empty array
      return res.send({
        data: events || [],
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


module.exports = { eventsByUserId, allEvents }
