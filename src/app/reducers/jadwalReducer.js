import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jadwal: [],
  jadwalById: {},
  loading: true,
};

const jadwalSlice = createSlice({
  name: "jadwal",
  initialState,
  reducers: {
    getJadwal: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        jadwal: action.jadwal,
        type: "jadwal/getJadwal",
      };
    },
    getJadwalById: (state, action) => {
      return {
        ...state,
        jadwalById: action.jadwalById,
        type: "jadwal/getJadwalById",
      };
    },
    getLoading: (state, action) => {
      return {
        ...state,
        loading: action.loading,
        type: "jadwal/getLoading",
      };
    },
  },
});
export const { getjadwal, getLoading, getjadwalById } = jadwalSlice.actions;
export default jadwalSlice.reducer;

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "GET_admin":
//       return {
//         ...state,
//         admins: action.admins,
//       };

//     default:
//       break;
//   }
// }
