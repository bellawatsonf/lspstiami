import axios from "axios";
import { fetchSkemaById } from "./skema";

export function fetchKriteriaKerja(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: "http://localhost:3001/kriteria-unitkerja",
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

export function fetchKriteriaKerjaById(id) {
  console.log(id, "skemabyid idservice");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/kriteriakerjabyid/${id}`,
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

export function addKriteriaKerja(input, idSkema) {
  console.log(input, "masukdrkriteria");
  return (dispatch, prevState) => {
    axios({
      url: "http://localhost:3001/add-kriteria-unitkerja",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkemaById(idSkema));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function editKriteriaKerja(input, idSkema, idKriteria) {
  console.log(input, "dari service");
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/edit-kriteriakerjabyid/${idKriteria}`,
      method: "put",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkemaById(idSkema));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function deleteKriteriaKerja(id, idskema) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/delete-kriteriakerjabyid/${id}`,
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
