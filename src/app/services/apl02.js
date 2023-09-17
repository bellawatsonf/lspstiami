import axios from "axios";

export function fetchApl02(params) {
  // console.log(params.page, params.size, "ph");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `/api/apl02`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "apl02");
        dispatch({
          type: "apl02/getApl02",
          apl02: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function fetchApl02ById(id) {
  return (dispatch, prevState) => {
    axios({
      url: `/api/apl02byid/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "databyids");
        dispatch({
          type: "apl02/getApl02ById",
          apl02ById: data.data.data,
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
        dispatch(fetchAsesorServices({ page: 2, size: 20 }));
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
        dispatch(fetchAsesorServices({ page: 2, size: 20 }));
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
        dispatch(fetchAsesorServices({ page: 2, size: 20 }));
      })
      .catch((err) => {
        console.log(err, "dari services admin");
      });
  };
}

export function fetchApl02ByUser(id) {
  return (dispatch, prevState) => {
    axios({
      url: `/api/apl02byuser/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "apluser");
        dispatch({
          type: "apl02/getApl02ByUser",
          apl02ByUser: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchApl02ByAllUser(id) {
  return (dispatch, prevState) => {
    axios({
      url: `/api/apl02byalluser/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "apluserall");
        dispatch({
          type: "apl02/getApl02ByAllUser",
          apl02ByAllUser: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchApl02ByApl01Id(id) {
  return (dispatch, prevState) => {
    axios({
      url: `/api/apl02byapl01id/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "apluserall");
        dispatch({
          type: "apl02/getApl02ByApl01Id",
          apl02ByApl01Id: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
