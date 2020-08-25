const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const joi = require("@hapi/joi");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;
    const schema = joi.object({
      fullName: joi.string().min(3).required(),
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
      phone: joi.string().max(20).required(),
      address: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const checkEmail = await User.findOne({
      where: {
        email,
      },
    });
    if (checkEmail) {
      return res.status(400).send({
        error: {
          message: "An account with the given email already exists",
        },
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const dataUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    const token = jwt.sign(
      {
        id: dataUser.id,
      },
      process.env.JWT_PASS
    );

    res.status(200).send({
      message: "Success! You have been registered",
      data: {
        email: dataUser.email,
        token,
        id: dataUser.id,
      },
    });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
