import axios from "axios"; // es6

const getDataCorona = async () => {
  const response = await axios.get(`https://api.covid19api.com/summary`);
  const result = response.status === 200 ? response.data : {};
  return result;
}
const sum = (a,b) => {
  return a+b;
}
const kiemTraChanLe = (n) => {
  return n % 2 === 0;
}
export const api = {
  kiemTraChanLe,
  sum
}

// chi dc export default cho 1 doi tuong 
export default getDataCorona;