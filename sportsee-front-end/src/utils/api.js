const BASE_URL = "http://localhost:3000/";

/**
 * Get user infos
 *
 * @param {number} userId User id
 * @returns {object} Response
 */
export const getUserInfos = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}user/${userId}`);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
