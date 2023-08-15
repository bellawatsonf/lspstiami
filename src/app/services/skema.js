import axios from "axios";

export function fetchSkema(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));
    axios({
      url: "http://localhost:3001/skemasertifikasi",
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
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function fetchSkemaById(id) {
  console.log(id, "skemabyid idservice");
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/get-skemaById/${id}`,
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
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function addSkema(input) {
  return (dispatch, prevState) => {
    axios({
      url: "http://localhost:3001/add-skemasertifikasi",
      method: "post",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkema());
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function editSkema(input, id) {
  console.log(input, id, "dari service");
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/edit-skemaById/${id}`,
      method: "put",
      data: input,
    })
      .then((data) => {
        console.log(data, "skemabyid dari service");
        dispatch(fetchSkema());
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function deleteSkema(id) {
  return (dispatch, prevState) => {
    axios({
      url: `http://localhost:3001/delete-skema/${id}`,
      method: "delete",
    })
      .then((data) => {
        console.log(data, "deleteservice");
        dispatch(fetchSkema());
      })
      .catch((err) => {
        console.log(err, "dari services asesi");
      });
  };
}

export function Loading(value) {
  return (dispatch, prevState) => {
    dispatch({
      type: "skema/getLoading",
      loading: value,
    });
  };
}
