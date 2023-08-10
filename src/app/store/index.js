import { configureStore } from "@reduxjs/toolkit";
import asesiReducer from "../reducers/asesiReducer";
import asesiskemaReducer from "../reducers/asesiskemaReducer";
import skemaReducer from "../reducers/skemaReducer";
import asesorReducer from "../reducers/asesorReducer";

export default configureStore({
  reducer: {
    asesi: asesiReducer,
    asesiskema: asesiskemaReducer,
    skema: skemaReducer,
    asesor: asesorReducer,
  },
});
