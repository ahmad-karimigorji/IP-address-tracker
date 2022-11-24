import PageView from "./PageView.js";

const ipUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_6Sn4JeMD9Mq9neDhjzFzjeEDHeLPo&ipAddress=";

const domainUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_6Sn4JeMD9Mq9neDhjzFzjeEDHeLPo&domain=";

export default async function getData(_input) {
  PageView.hideAddressDetailsBox();
  PageView.displayLoading();
  let url1 = `${ipUrl}${_input}`;
  let url2 = `${domainUrl}${_input}`;

  try {
    const response = await fetch(url1);
    const response_1 = await response.json();
    const data =
      response_1.length > 0
        ? response_1
        : fetch(url2).then((response_2) => response_2.json());
    PageView.hideLoading();
    return data;
  } catch (error) {
    console.log(error);
  }
}
