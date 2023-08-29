import axios from "axios";
import { fetchSkemaById } from "./skema";

export function fetchUnitKompetensi(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: "/api/unitkompetensi",
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
      url: `/api/unitkompetensibyid/${id}`,
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
      url: "/api/add-unitkompetensi",
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
      url: `/api/edit-unitkompetensibyid/${id}`,
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
      url: `/api/delete-unitkompetensibyid/${id}`,
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
