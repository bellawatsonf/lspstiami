import axios from "axios";
import { Loading } from "./skema";
import Swal from "sweetalert2";

export function fetchJadwal(param) {
  console.log(param, "param");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));
    axios({
      url: `/api/jadwal?page=${param.page - 1}&size=${param.size}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data, "data");
        dispatch({
          type: "jadwal/getJadwal",
          jadwal: data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari servicesjadwal");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function fetchJadwalById(id) {
  console.log("fetch jadwal by id");
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    console.log(dispatch, "dispatch");
    axios({
      url: `/api/getById/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "data jadwal by id");
        dispatch({
          type: "jadwal/getJadwalById",
          jadwalById: data.data.data,
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

export function addJadwal(input, param) {
  console.log(param, "di addjadwal");
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: "/api/add-jadwal",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "add jjadwal");
        dispatch(
          fetchJadwal({
            page: 1,
            size: 10,
          })
        );
        // dispatch(Loading(false));
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function editJadwal(input, id) {
  console.log(input, id, "dari service");

  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: `/api/edit-jadwal/${id}`,
      method: "patch",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(
          fetchJadwal({
            page: 1,
            size: 10,
          })
        );
      })
      .catch((err) => {
        console.log(err, "dari services jadwal");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function deleteJadwal(id) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));
    axios({
      url: `/api/delete-jadwal/${id}`,
      method: "delete",
    })
      .then((data) => {
        console.log(data, "deleteservice");
        dispatch(
          fetchJadwal({
            page: 1,
            size: 10,
          })
        );
      })
      .catch((err) => {
        console.log(err, "dari services jadwal");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}
