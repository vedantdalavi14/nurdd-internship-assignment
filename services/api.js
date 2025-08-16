const API_BASE_URL = 'https://68a0093f6e38a02c58179d3a.mockapi.io';

export const getBrands = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch brands:', error);
    throw error;
  }
};

export const getBrandById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch brand with id ${id}:`, error);
    throw error;
  }
};
