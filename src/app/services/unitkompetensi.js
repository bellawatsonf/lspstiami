import axios from "axios";
import { fetchSkemaById } from "./skema";

export function fetchUnitKompetensi(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: "http://localhost:3001/unitkompetensi",
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "dataasesi dari service");
        dispatch({
          type: "skema/getSkema",
          skema: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function fetchUnitKompetensiById(id) {
  console.log(id, "skemabyid idservice");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/unitkompetensibyid/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch({
          type: "skema/getSkemaById",
          skemaById: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function addUnitKompetensi(input) {
  console.log(input, "druunit");
  return (dispatch, prevState) => {
    axios({
      url: "http://localhost:3001/add-unitkompetensi",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkemaById(input.id_skema));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function editUnitKompetensi(input, id) {
  console.log(input, id, "dari service");
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/edit-unitkompetensibyid/${id}`,
      method: "put",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkemaById(input.id_skema));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function deleteUnitKompetensi(id, idskema) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/delete-unitkompetensibyid/${id}`,
      method: "delete",
    })
      .then((data) => {
        console.log(data, "deleteservice");
        dispatch(fetchSkemaById(idskema));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}
