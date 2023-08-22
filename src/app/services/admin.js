import axios from "axios";
import { Loading } from "./skema";

export function fetchAdmin(param) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));
    axios({
      url: `http://localhost:3001/admin?page=${param.page - 1}&size=${
        param.size
      }`,
      method: "GET",
    })
      .then((data) => {
        dispatch({
          type: "admin/getAdmin",
          admin: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari servicesadmin");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function fetchAdminById(id) {
  console.log(id, "skemabyid idservice");
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/get-adminById/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data, "adminby dari service");
        dispatch({
          type: "admin/getAdminById",
          adminById: data.data.data,
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

export function addAdmin(input) {
  return (dispatch, prevState) => {
    axios({
      url: "http://localhost:3001/add-admin",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchAdmin());
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function editAdmin(input, id) {
  console.log(input, id, "dari service");
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/edit-admin/${id}`,
      method: "patch",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchAdmin());
      })
      .catch((err) => {
        console.log(err, "dari services admin");
      });
  };
}

export function deleteAdmin(id) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/delete-admin/${id}`,
      method: "delete",
    })
      .then((data) => {
        console.log(data, "deleteservice");
        dispatch(fetchAdmin());
      })
      .catch((err) => {
        console.log(err, "dari services admin");
      });
  };
}
