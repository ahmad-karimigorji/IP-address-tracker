import PageView from "./PageView.js";
import setMap from "./Map.js";


const ipUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_6Sn4JeMD9Mq9neDhjzFzjeEDHeLPo&ipAddress=";

const domainUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_6Sn4JeMD9Mq9neDhjzFzjeEDHeLPo&domain=";

export default async function getData(input) {
  PageView.hideAddressDetailsBox();
  PageView.displayLoading();
  const IP_URL = `${ipUrl}${input}`;
  const DOMAIN_URL = `${domainUrl}${input}`;

  try {
    const { data } = await axios.get(IP_URL);
    PageView.hideLoading();
    setMap(data);
    PageView.displayAddressDetailsBox(data);
  } catch (error) {
    try {
      const { data } = await axios.get(DOMAIN_URL);
      PageView.hideLoading();
      setMap(data);
      PageView.displayAddressDetailsBox(data);
    } catch (error) {
      console.log(error);
      PageView.hideLoading();
      PageView.displayNotFoundMessage();
      setMap();
    }
  }

}
