import axios from "axios";

export function fetchSkema(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));
    axios({
      url: "/api/skemasertifikasi",
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

export function fetchSkemaPage(param) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));
    axios({
      url: `/api/skemasertifikasiwithpage?page=${param.page - 1}&size=${
        param.size
      }`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "dataasesi dari service");
        dispatch({
          type: "skema/getSkemaWithPage",
          skemapage: {
            dataSkema: data.data.listData,
            totalPage: data.data.totalPages,
          },
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
      url: `/api/get-skemaById/${id}`,
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
      url: "/api/add-skemasertifikasi",
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
      url: `/api/edit-skemaById/${id}`,
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
      url: `/api/delete-skema/${id}`,
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
