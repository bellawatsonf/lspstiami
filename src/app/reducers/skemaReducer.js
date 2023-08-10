import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skema: [],
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
  },
});
export const { getSkema } = skemaSlice.actions;
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
