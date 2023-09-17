import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asesor: {
    dataAsesor: [],
    totalPage: 0,
    asesorById: {},
    allAsesor: [],
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
    getAllAsesor: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        allAsesor: action.allAsesor,
        type: "asesor/getAllAsesor",
      };
    },
    getAsesorById: (state, action) => {
      return {
        ...state,
        asesorById: action.asesorById,
        type: "asesor/getAsesorById",
      };
    },
  },
});
export const { getAsesor, getAsesorById } = asesorSlice.actions;
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
