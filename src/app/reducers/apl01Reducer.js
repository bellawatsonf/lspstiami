import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apl01: {
    apl01: [],
  },
  apl01withoutpage: [],
  // totalPage: 0,
  // asesorById: {},

  apl01ById: {},
  apl01ByUser: {},
  apl01ByAllUser: [],
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
    getApl01WithoutPage: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        apl01withoutpage: action.apl01withoutpage,
        type: "apl01/getApl01WithoutPage",
      };
    },
    getApl01ById: (state, action) => {
      return {
        ...state,
        apl01ById: action.apl01ById,
        type: "apl01/getApl01ById",
      };
    },
    getApl01ByUser: (state, action) => {
      return {
        ...state,
        apl01ByUser: action.apl01ByUser,
        type: "apl01/getApl01ByUser",
      };
    },
    getApl01ByAllUser: (state, action) => {
      return {
        ...state,
        apl01ByAllUser: action.apl01ByAllUser,
        type: "apl01/getApl01ByAllUser",
      };
    },
  },
});
export const {
  getApl01,
  getApl01ById,
  getApl01ByUser,
  getApl01ByAllUser,
  getApl01WithoutPage,
} = apl01Slice.actions;
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
