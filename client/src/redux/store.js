import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
import taskReducer from "./taskSlice";
export const store = configureStore({
  reducer: { auth: authReducer, task: taskReducer },
});
