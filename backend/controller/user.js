const { User } = require("../models");

exports.readDetailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "Response Success", data: findUser });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
