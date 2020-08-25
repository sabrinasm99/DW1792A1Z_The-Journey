const { Journey, User } = require("../models");

exports.postJourney = async (req, res) => {
  try {
    const { title, userId, description } = req.body;
    // const { postImage } = req.files;
    // const postImageName = postImage.name;
    const postJourney = await Journey.create({
      title,
      userId,
      description,
      date: new Date().toString().split(" ").slice(1, 4).join(" "),
    //   image: postImageName,
    });
    // await postImage.mv(`./images/${postImageName}`);
    const findJourney = await Journey.findOne({
      where: { id: postJourney.id },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["userId", "UserId", "createdAt", "updatedAt"],
      },
    });
    res
      .status(200)
      .send({ message: "Success Post Journey", data: findJourney });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.readJourneys = async (req, res) => {
  try {
    const findJourneys = await Journey.findAll({
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["userId", "UserId", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "Response Success", data: findJourneys });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.readDetailJourney = async (req, res) => {
  try {
    const { id } = req.params;
    const detailJourney = await Journey.findOne({
      where: { id },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["userId", "UserId", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "Response Success", data: detailJourney });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.readJourneysByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const journeys = await Journey.findAll({
      where: { userId: id },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["userId", "UserId", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "Response Success", data: journeys });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
