import getData from "./Fetch.js";
import setMap from "./Map.js";
import PageView from "./PageView.js";

export default function setUp(input) {
  const promis = getData(input);

  promis
    .then((data) => {
      setMap(data);
      PageView.displayAddressDetailsBox(data);
    })
    .catch((err) => {
      PageView.displayNotFoundMessage();
      console.log(err);
      return setMap();
    });
}
