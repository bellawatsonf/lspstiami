import axios from "axios";
import { getAsesi } from "../reducers/asesiReducer";

export function fetchAsesorServices(params) {
  // console.log(params.page, params.size, "ph");
  return (dispatch, prevState) => {
    console.log(dispatch, "dispatch");
    axios({
      url: `http://localhost:3001/asesor?page=${params.page - 1}&size=${
        params.size
      }`,
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

// export function fetchAsesiById(id) {
//   return (dispatch, prevState) => {
//     axios({
//       url: `http://localhost:3001/asesi/${id}`,
//       method: "GET",
//     })
//       .then((data) => {
//         console.log(data.data.data, "databyid");
//         dispatch({
//           type: "asesi/getAsesiById",
//           AsesiById: data.data.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
