import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export function fetchAsesiServices(page, size) {
  return (dispatch, prevState) => {
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
      });
  };
}

export function fetchAsesiById(id) {
  return (dispatch, prevState) => {
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
      });
  };
}
