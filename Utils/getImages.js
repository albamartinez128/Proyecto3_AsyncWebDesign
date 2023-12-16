export const getImages = async (inputValue) => {
  const apiKey = "hnZXiqPMHstHIrvXiZN5qldLwxZkLyHOwuHrRJFjGUM";
  const urlApi = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${apiKey}&per_page=10&order_by=random`;

  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error al optener los datos de las imágenes", error);
  }
};
