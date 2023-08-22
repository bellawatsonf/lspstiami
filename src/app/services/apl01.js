import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";

export function fetchApl01(params) {
  // console.log(params.page, params.size, "ph");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/apl01`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "apl01");
        dispatch({
          type: "apl01/getApl01",
          apl01: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function fetchApl01ById(id) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/apl01byid/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "databyids");
        dispatch({
          type: "apl01/getApl01ById",
          apl01ById: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addAsesor(input) {
  return (dispatch, prevState) => {
    axios({
      url: "http://localhost:3001/add-asesor",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchAsesorServices({ page: 1, size: 10 }));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function editAsesor(input, id) {
  console.log(input, id, "dari service");
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/edit-asesor/${id}`,
      method: "patch",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchAsesorServices({ page: 1, size: 10 }));
      })
      .catch((err) => {
        console.log(err, "dari services Asesor");
      });
  };
}

export function deleteAsesor(id) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/delete-asesor/${id}`,
      method: "delete",
    })
      .then((data) => {
        console.log(data, "deleteservice");
        dispatch(fetchAsesorServices({ page: 1, size: 10 }));
      })
      .catch((err) => {
        console.log(err, "dari services admin");
      });
  };
}
