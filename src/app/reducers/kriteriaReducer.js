import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kriteriaKerja: [],
  kriteriaKerjaById: {},
};

const kriteriaKerjaSlice = createSlice({
  name: "kriteriaKerja",
  initialState,
  reducers: {
    getKriteriaKerja: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        kriteriaKerja: action.kriteriaKerja,
        type: "kriteriaKerja/getKriteriaKerja",
      };
    },
    getKriteriaKerjaById: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        kriteriaKerjaById: action.kriteriaKerjaById,
        type: "kriteriaKerja/getKriteriaKerjaById",
      };
    },
  },
});
export const { getKriteriaKerja, getKriteriaKerjaById } =
  kriteriaKerjaSlice.actions;
export default kriteriaKerjaSlice.reducer;

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "GET_ASESI":
//       return {
//         ...state,
//         asesis: action.asesis,
//       };

//     default:
//       break;
//   }
// }
