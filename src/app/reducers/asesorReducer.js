import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesor: {
    dataAsesor: [],
    totalPage: 0,
  },
  AsesorById: {},
};

const asesorSlice = createSlice({
  name: "asesor",
  initialState,
  reducers: {
    getAsesor: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        asesor: action.asesor,
        type: "asesor/getAsesor",
      };
    },
    // getAsesiById: (state, action) => {
    //   return {
    //     ...state,
    //     AsesiById: action.AsesiById,
    //     type: "asesi/getAsesiById",
    //   };
    // },
  },
});
export const { getAsesor } = asesorSlice.actions;
export default asesorSlice.reducer;

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
