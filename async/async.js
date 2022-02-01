const axios = require("axios");

const fetchData = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return result.data;
};

fetchData(1);

module.exports = fetchData;
