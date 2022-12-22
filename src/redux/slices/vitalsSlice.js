import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";



export const createVitalsAction = createAsyncThunk(
  "vitals/add",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/vitals/` ,
      payload);
      toast.success("Vitals Added Successfully")
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast.error("Unable to Add Vitals")
      return rejectWithValue("Error Fetching Data");
    }
  }
);

export const fetchSinglekey = createAsyncThunk(
  "single/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/${payload}`
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchsinglePendingkey = createAsyncThunk(
  "single/pendingkey",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/pending/${payload}`
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchPendingkey = createAsyncThunk(
  "pending/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/pending`
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchinstitutionkey = createAsyncThunk(
  "institution/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/all/${payload}`
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPendingkey = createAsyncThunk(
  "pending/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/keys/pending`,
        payload
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createnewkey = createAsyncThunk(
  "newkey/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/keys`,
        payload
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createnewkey1 = createAsyncThunk(
  "newkey1/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/keys`,
        payload
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const revokekey = createAsyncThunk(
  "revoke/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/keys/${payload}`
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletesinglePendingkey = createAsyncThunk(
  "delete/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/keys/delete/${payload}`
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);



const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const storeSlices = createSlice({
  name: "stores",
  initialState: initialState,

  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.p_id === action.payload.p_id
      );
      if (itemIndex >= 0) {
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },

    increaseQty(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.p_id === action.payload
      );
      if (
        state.cartItems[itemIndex].cartQuantity < state.cartItems[itemIndex].qty
      ) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
    },
    decreaseQty(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.p_id === action.payload
      );
      if (state.cartItems[itemIndex].cartQuantity >= 2) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.p_id !== action.payload
      );
      state.cartItems = nextCartItems;
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createVitalsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createVitalsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.createVitals = action.payload;
     
    });
    builder.addCase(createVitalsAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchSinglekey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSinglekey.fulfilled, (state, action) => {
      state.Singlekey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchSinglekey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.Singlekey = undefined;
    });

    builder.addCase(fetchPendingkey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPendingkey.fulfilled, (state, action) => {
      state.Pendingkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchPendingkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.Pendingkey = undefined;
    });

    builder.addCase(fetchinstitutionkey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchinstitutionkey.fulfilled, (state, action) => {
      state.institutionkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchinstitutionkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.institutionkey = undefined;
    });


    builder.addCase(createPendingkey.pending, (state, action) => {
      state.loading = true;
      state.createPending = undefined;
    });
    builder.addCase(createPendingkey.fulfilled, (state, action) => {
      state.createPending = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(createPendingkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.createPending = undefined;
    });

    builder.addCase(revokekey.pending, (state, action) => {
      state.loading = true;
      state.revokes = undefined;
    });
    builder.addCase(revokekey.fulfilled, (state, action) => {
      state.revokes = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(revokekey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.revokes = undefined;
    });

    builder.addCase(fetchsinglePendingkey.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchsinglePendingkey.fulfilled, (state, action) => {
      state.singlePendingkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchsinglePendingkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.singlePendingkey = undefined;
    });

    builder.addCase(createnewkey.pending, (state, action) => {
      state.loading = true;
      state.newkey = undefined;
    });
    builder.addCase(createnewkey.fulfilled, (state, action) => {
      state.newkey = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(createnewkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.newkey = undefined;
    });

    builder.addCase(createnewkey1.pending, (state, action) => {
      state.loading = true;
      state.newkey1 = undefined;
    });
    builder.addCase(createnewkey1.fulfilled, (state, action) => {
      state.newkey1 = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(createnewkey1.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.newkey1 = undefined;
    });

    builder.addCase(deletesinglePendingkey.pending, (state, action) => {
      state.loading = true;
      state.deletesingle = undefined;
    });
    builder.addCase(deletesinglePendingkey.fulfilled, (state, action) => {
      state.deletesingle = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deletesinglePendingkey.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.deletesingle = undefined;
    });
  },
});
export const {
  addToCart,
  removeFromCart,
  decreaseQty,
  increaseQty,
  getTotals,
  clearCart,
} = storeSlices.actions;

export default storeSlices.reducer;
