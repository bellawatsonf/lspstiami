import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unitKompetensi: [],
  unitKompetensiById: {},
};

const unitKompetensiSlice = createSlice({
  name: "unitKompetensi",
  initialState,
  reducers: {
    getUnitKompetensi: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        unitKompetensi: action.unitKompetensi,
        type: "unitKompetensi/getunitKompetensi",
      };
    },
    getUnitKompetensiById: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        unitKompetensiById: action.unitKompetensiById,
        type: "unitKompetensi/getunitKompetensiById",
      };
    },
  },
});
export const { getUnitKompetensi, getUnitKompetensiById } =
  unitKompetensiSlice.actions;
export default unitKompetensiSlice.reducer;

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
