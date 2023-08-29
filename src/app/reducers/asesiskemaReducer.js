import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesiskema: [],
  AsesiSkemaById: {},
  asesiSkemaByUser: [],
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
    getAsesiSkemaByUser: (state, action) => {
      return {
        ...state,
        asesiSkemaByUser: action.asesiSkemaByUser,
        type: "asesiskema/getAsesiSkemaByUser",
      };
    },
  },
});
export const { getAsesiSkema, getAsesiSkemaById, getAsesiSkemaByUser } =
  asesiskemaSlice.actions;
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
