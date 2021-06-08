// nhung thu vien de su dung
const axios = require('axios');

// dung promise call api
const url = `https://api.covid19api.com/summary`;

const getDataCovid = () => {
  // return ve 1 promise
  // axios: da la 1 promise
  const response = axios.get(url);
  return response;
}

// hien thi data
//getDataCovid().then( results => console.log(results.data))
              //.catch(error => console.log( error));


// dung async ... await
const getDataCovidV2 = async () => {
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}
// hien thi data
let t = getDataCovidV2();
t.then(data => console.log(data));