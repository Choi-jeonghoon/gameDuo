const userService = require("./userService");

async function createUser(req, res) {
  try {
    const data = await userService.createUser();
    return res.status(200).json({ message: "SUCCESS" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function readUserById(req, res) {
  try {
    const id = req.params.id;
    const data = await userService.readUserById(id);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { createUser, readUserById };
