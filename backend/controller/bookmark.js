const { Bookmark, Journey, User } = require("../models");

exports.addBookmark = async (req, res) => {
  try {
    const { journeyId, profileId } = req.body;
    const createBookmark = await Bookmark.create({ journeyId, profileId });
    const findBookmark = await Bookmark.findOne({
      where: { id: createBookmark.id },
      include: {
        model: Journey,
        as: "journey",
        attributes: {
          exclude: ["userId", "UserId", "createdAt", "updatedAt"],
        },
        include: {
          model: User,
          as: "user",
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "journeyId", "JourneyId"],
      },
    });
    res
      .status(200)
      .send({ message: "Success Add Bookmark", data: findBookmark });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.readBookmarksByProfileId = async (req, res) => {
  try {
    const { id } = req.params;
    const findBookmarks = await Bookmark.findAll({
      where: {
        id,
      },
      include: {
        model: Journey,
        as: "journey",
        attributes: {
          exclude: ["userId", "UserId", "createdAt", "updatedAt"],
        },
        include: {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "journeyId", "JourneyId"],
      },
    });
    res.status(200).send({ message: "Response Success", data: findBookmarks });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
