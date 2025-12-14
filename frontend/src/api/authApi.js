import axiosInstance from "./axiosInstance";

/**
 * Register new user
 * @route POST /api/auth/register
 */
export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

/**
 * Login user
 * @route POST /api/auth/login
 */
export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};
