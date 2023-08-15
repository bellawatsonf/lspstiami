import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";
import { Loading } from "./skema";

export function fetchAsesiSkemaServices(asesiskema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));

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
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function fetchAsesiSkemaById(id) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));

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
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}
