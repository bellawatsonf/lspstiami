import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skema: [],
  skemaById: {},
  loading: true,
};

const skemaSlice = createSlice({
  name: "skema",
  initialState,
  reducers: {
    getSkema: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        skema: action.skema,
        type: "skema/getSkema",
      };
    },
    getSkemaById: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        skemaById: action.skemaById,
        type: "skema/getSkemaById",
      };
    },
    getLoading: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        loading: action.loading,
        type: "skema/getLoading",
      };
    },
  },
});
export const { getSkema, getSkemaById, getLoading } = skemaSlice.actions;
export default skemaSlice.reducer;

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
