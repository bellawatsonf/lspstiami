import axios from "axios";

export function fetchSkema(skema) {
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
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
      });
  };
}
