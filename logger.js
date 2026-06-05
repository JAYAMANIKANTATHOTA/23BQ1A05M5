const axios = require("axios");

const TOKEN = "PASTE_NEW_TOKEN_HERE";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);
  } catch (err) {
    console.log("ERROR:");
    console.log(err.response?.data || err.message);
  }
}

module.exports = Log;