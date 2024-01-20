import axios from "axios";
import { Loading } from "./skema";

export function fetchAsesiSkemaServices(param) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    dispatch(Loading(true));

    axios({
      url: `/api/asesi-skema?page=${param.page - 1}&size=${
        param.size
      }&statusCek=${param.statusCek}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "asesiskema dari service");
        dispatch({
          type: "asesiskema/getAsesiSkema",
          asesiskema: {
            dataAsesiSkema: data.data.listData,
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

export function fetchAsesiSkemaByIdDetail(id) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: `/api/get-detail/${id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.data, "dataasesiskema");
        dispatch({
          type: "asesiskema/getAsesiSkemaById",
          AsesiSkemaById: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function fetchAsesiSkemaByUser(userId) {
  console.log("datauserasesiskemabyuserppp", userId);
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: `/api/asesi-skema/${userId}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data, "datauserasesiskemabyuser");
        dispatch({
          type: "asesiskema/getAsesiSkemaByUser",
          asesiSkemaByUser: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err, "datausererror");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}

export function deleteAsesiSkema(id, statusCek) {
  return (dispatch, prevState) => {
    dispatch(Loading(true));

    axios({
      url: `/api/delete-asesiskema/${id}`,
      method: "DELETE",
    })
      .then((data) => {
        console.log(data.data, "datauserasesiskemabyuser");
        dispatch(
          fetchAsesiSkemaServices({ page: 1, size: 10, statusCek: statusCek })
        );
      })
      .catch((err) => {
        console.log(err, "datausererror");
      })
      .finally((_) => {
        dispatch(Loading(false));
      });
  };
}
