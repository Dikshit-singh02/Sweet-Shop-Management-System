import axiosInstance from "./axiosInstance";

/**
 * Get all sweets
 * @route GET /api/sweets
 */
export const getAllSweets = async () => {
  try {
    const res = await axiosInstance.get("/sweets");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch sweets" };
  }
};

/**
 * Search sweets
 * @route GET /api/sweets/search
 */
export const searchSweets = async (params) => {
  try {
    const res = await axiosInstance.get("/sweets/search", { params });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Search failed" };
  }
};

/**
 * Add new sweet (Admin)
 * @route POST /api/sweets
 */
export const addSweet = async (data) => {
  try {
    const res = await axiosInstance.post("/sweets", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Add sweet failed" };
  }
};

/**
 * Update sweet (Admin)
 * @route PUT /api/sweets/:id
 */
export const updateSweet = async (id, data) => {
  try {
    const res = await axiosInstance.put(`/sweets/${id}`, data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Update failed" };
  }
};

/**
 * Delete sweet (Admin)
 * @route DELETE /api/sweets/:id
 */
export const deleteSweet = async (id) => {
  try {
    const res = await axiosInstance.delete(`/sweets/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Delete failed" };
  }
};

/**
 * Purchase sweet (User)
 * @route POST /api/sweets/:id/purchase
 */
export const purchaseSweet = async (id) => {
  try {
    const res = await axiosInstance.post(`/sweets/${id}/purchase`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Purchase failed" };
  }
};

/**
 * Restock sweet (Admin)
 * @route POST /api/sweets/:id/restock
 */
export const restockSweet = async (id, quantity) => {
  try {
    const res = await axiosInstance.post(`/sweets/${id}/restock`, {
      quantity
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Restock failed" };
  }
};
