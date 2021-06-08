import axios from "axios";

// generator function
export function* getDataCorona() {
  const response = yield axios.get(`https://api.covid19api.com/summary`);
  const result = response.status === 200 ? response.data : {};
  return result;
}

