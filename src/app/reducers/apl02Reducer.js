import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apl02: [],
  // totalPage: 0,
  // asesorById: {},

  apl02ById: {},
  apl02ByUser: {},
  apl02ByAllUser: [],
  apl02ByApl01Id: [],
};

const apl02Slice = createSlice({
  name: "apl02",
  initialState,
  reducers: {
    getApl02: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        apl02: action.apl02,
        type: "apl02/getApl02",
      };
    },
    getApl02ById: (state, action) => {
      return {
        ...state,
        apl02ById: action.apl02ById,
        type: "apl02/getApl02ById",
      };
    },
    getApl02ByUser: (state, action) => {
      return {
        ...state,
        apl02ByUser: action.apl02ByUser,
        type: "apl02/getApl02ByUser",
      };
    },
    getApl02ByAllUser: (state, action) => {
      return {
        ...state,
        apl02ByAllUser: action.apl02ByAllUser,
        type: "apl02/getApl02ByAllUser",
      };
    },
    getApl02ByApl01Id: (state, action) => {
      return {
        ...state,
        apl02ByApl01Id: action.apl02ByApl01Id,
        type: "apl02/getApl02ByApl01Id",
      };
    },
  },
});
export const {
  getApl02,
  getApl02ById,
  getApl02ByUser,
  getApl02ByAllUser,
  getApl02ByApl01Id,
} = apl02Slice.actions;
export default apl02Slice.reducer;

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
