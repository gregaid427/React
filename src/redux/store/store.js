import { configureStore } from "@reduxjs/toolkit";
import stores from "../slices/storeSlice";
import myusers from "../slices/UsersSlice";

const store = configureStore({
  reducer: {
    stores: stores,
    myusers: myusers,
    

  },
});

export default store;
