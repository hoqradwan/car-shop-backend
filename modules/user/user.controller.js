import { createUserIntoDB, getUsersFromDB } from "./user.service.js";

export const createUser = async (req, res) => {
  const userData = req.body;
  const result = await createUserIntoDB(userData);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: result,
  });
};
export const getUsers = async (req, res) => {
  const result = await getUsersFromDB();
  res.status(201).json({
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
};
