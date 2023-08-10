import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";

export function fetchAsesiSkemaServices(asesiskema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: "http://localhost:3001/asesi-skema",
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "dataasesi dari service");
        dispatch({
          type: "asesiskema/getAsesiSkema",
          asesiskema: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function fetchAsesiSkemaById(id) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/asesi-skema/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "dataasesiskema");
        dispatch({
          type: "asesiskema/getAsesiSkemaById",
          AsesiSkemaById: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
