import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {
    dataAdmin: [],
  },
  adminById: {},
  loading: true,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getAdmin: (state = initialState, action) => {
      console.log(action, "action reducer");
      return {
        ...state,
        admin: action.admin,
        type: "admin/getAdmin",
      };
    },
    getAdminById: (state, action) => {
      return {
        ...state,
        adminById: action.adminById,
        type: "admin/getAdminById",
      };
    },
    getLoading: (state, action) => {
      return {
        ...state,
        loading: action.loading,
        type: "admin/getLoading",
      };
    },
  },
});
export const { getAdmin, getLoading, getAdminById } = adminSlice.actions;
export default adminSlice.reducer;

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "GET_admin":
//       return {
//         ...state,
//         admins: action.admins,
//       };

//     default:
//       break;
//   }
// }
