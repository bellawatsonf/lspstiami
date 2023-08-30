import axios from "axios";

export function fetchAsesorServices(params) {
  // console.log(params.page, params.size, "ph");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `/api/asesor?page=${params.page - 1}&size=${params.size}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data, "dataasesor dari service");
        dispatch({
          type: "asesor/getAsesor",
          asesor: {
            dataAsesor: data.data.listData,
            totalPage: data.data.totalPages,
          },
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function fetchAsesorById(id) {
  return (dispatch, prevState) => {
    axios({
      url: `/api/get-asesorById/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "databyid");
        dispatch({
          type: "asesor/getAsesorById",
          asesorById: data.data.data,
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
      url: "/api/add-asesor",
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
      url: `/api/edit-asesor/${id}`,
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
      url: `/api/delete-asesor/${id}`,
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
