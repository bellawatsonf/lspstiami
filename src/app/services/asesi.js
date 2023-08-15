import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Loading } from "./skema";

export function fetchAsesiServices(page, size) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));
    console.log(dispatch, "dispatch");
    axios({
      url: "http://localhost:3001/asesi",
      method: "GET",
    })
      .then((data) => {
        console.log(data, "dataasesi dari service");
        dispatch({
          type: "asesi/getAsesi",
          asesis: data.data.data,
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

export function fetchAsesiById(id) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: `http://localhost:3001/asesi/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "databyid");
        dispatch({
          type: "asesi/getAsesiById",
          AsesiById: data.data.data,
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
