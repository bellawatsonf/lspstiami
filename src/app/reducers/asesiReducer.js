import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesis: [],
  AsesiById: {},
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
  },
});
export const { getAsesi } = asesiSlice.actions;
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
