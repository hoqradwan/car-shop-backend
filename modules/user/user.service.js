import { User } from "./user.model.js";

export const createUserIntoDB = async (userData) => {
  const user = await User.create(userData);
  return user;
};
export const getUsersFromDB = async () => {
  const user = await User.find({});
  return user;
};
