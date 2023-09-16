import instance from "../index";

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await instance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
