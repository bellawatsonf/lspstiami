import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesis: [],
  AsesiById: {},
  loading: true,
};

const asesiSlice = createSlice({
  name: "asesi",
  initialState,
  reducers: {
    getAsesi: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        asesis: action.asesis,
        type: "asesi/getAsesi",
      };
    },
    getAsesiById: (state, action) => {
      return {
        ...state,
        AsesiById: action.AsesiById,
        type: "asesi/getAsesiById",
      };
    },
    getLoading: (state, action) => {
      return {
        ...state,
        loading: action.loading,
        type: "asesi/getLoading",
      };
    },
  },
});
export const { getAsesi, getLoading } = asesiSlice.actions;
export default asesiSlice.reducer;

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
