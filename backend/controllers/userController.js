import user from "../schema/user.js";

export const getAllUser = async (req, res) => {
  try {
    const result = await user.find({});
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const users = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      status: req.body.status,
      password: req.body.password,
    };
    const result = await user.create(users);
    if (!result) {
      res.status(500).json({ message: "The Field must require" });
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
