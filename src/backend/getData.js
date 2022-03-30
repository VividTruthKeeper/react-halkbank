import axios from "axios";
import { dataDestination } from "../destinationUrl";
export const getCardData = (isMounted, setState) => {
  axios
    .get(`${dataDestination}/card_data`)
    .then((res) => {
      if (isMounted) {
        setState(res.data);
      }
    })
    .catch();
};
