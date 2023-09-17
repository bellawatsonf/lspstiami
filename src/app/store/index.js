import { configureStore } from "@reduxjs/toolkit";
import asesiReducer from "../reducers/asesiReducer";
import asesiskemaReducer from "../reducers/asesiskemaReducer";
import skemaReducer from "../reducers/skemaReducer";
import asesorReducer from "../reducers/asesorReducer";
import adminReducer from "../reducers/adminReducer";
import apl01Reducer from "../reducers/apl01Reducer";
import apl02Reducer from "../reducers/apl02Reducer";
import jadwalReducer from "../reducers/jadwalReducer";

export default configureStore({
  reducer: {
    asesi: asesiReducer,
    asesiskema: asesiskemaReducer,
    skema: skemaReducer,
    asesor: asesorReducer,
    admin: adminReducer,
    apl01: apl01Reducer,
    apl02: apl02Reducer,
    jadwal: jadwalReducer,
  },
});
