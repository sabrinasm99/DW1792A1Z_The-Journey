const { Journey, User } = require("../models");

exports.postJourney = async (req, res) => {
  try {
    const { title, userId, description } = req.body;
    const { postImage } = req.files;
    const postImageName = postImage.name;
    const postJourney = await Journey.create({
      title,
      userId,
      description,
      image: postImageName,
    });
    await postImage.mv(`./images/${postImageName}`);
    const findJourney = await Journey.findOne({
      where: { id: postJourney.id },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["userId", "UserId", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "Response Success", data: findJourney });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
