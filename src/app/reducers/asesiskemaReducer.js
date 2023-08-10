import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesiskema: [],
  AsesiSkemaById: {},
};

const asesiskemaSlice = createSlice({
  name: "asesiskema",
  initialState,
  reducers: {
    getAsesiSkema: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        asesiskema: action.asesiskema,
        type: "asesiskema/getAsesiSkema",
      };
    },
    getAsesiSkemaById: (state, action) => {
      return {
        ...state,
        AsesiSkemaById: action.AsesiSkemaById,
        type: "asesiskema/getAsesiSkemaById",
      };
    },
  },
});
export const { getAsesiSkema, getAsesiSkemaById } = asesiskemaSlice.actions;
export default asesiskemaSlice.reducer;

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
