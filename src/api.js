import axios from "axios";
const baseURL = "https://newsdata.io/api/1/news?apikey=pub_1670043bbd9c7d4e15ca1f708662291a6bc83&language=en";
function fetchNews(callBack) {
  axios.get(baseURL).then((response) => {
    console.log(response.data.results)
    callBack(response.data.results);
  });
}
function findNews( q,callBack) {
    axios.get(baseURL+`&q=${q}`).then((response) => {
      console.log(response.data.results)
      callBack(response.data.results);
    });
  }
export { fetchNews,findNews };
