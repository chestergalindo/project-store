const API = 'http://localhost:8080/products/list';

const getInfo = async () => {
  const response = await fetch(API);
  const json = await response.json();
  return json;
}