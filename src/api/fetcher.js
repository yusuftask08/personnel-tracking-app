import instance from "./index";

export const fetcher = async (endpoint, method = "GET", params = {}, data) => {
  try {
    const response = await instance.request({
      method,
      url: endpoint,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
