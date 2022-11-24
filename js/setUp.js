import getData from "./Fetch.js";
import setMap from "./Map.js";
import PageView from "./PageView.js";

export default function setUp(input) {
  const promis = getData(input);

  promis
    .then((data) => {
      if (data.code) {
        PageView.displayNotFoundMessage();
        return setMap();
      }

      setMap(data);
      PageView.displayAddressDetailsBox(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
