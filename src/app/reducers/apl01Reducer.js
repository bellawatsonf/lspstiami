import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apl01: [],
  // totalPage: 0,
  // asesorById: {},

  apl01ById: {},
};

const apl01Slice = createSlice({
  name: "apl01",
  initialState,
  reducers: {
    getApl01: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        apl01: action.apl01,
        type: "apl01/getApl01",
      };
    },
    getApl01ById: (state, action) => {
      return {
        ...state,
        apl01ById: action.apl01ById,
        type: "apl01/getApl01ById",
      };
    },
  },
});
export const { getApl01, getApl01ById } = apl01Slice.actions;
export default apl01Slice.reducer;

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
