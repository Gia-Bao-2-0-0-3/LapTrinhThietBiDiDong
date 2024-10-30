// redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get('https://6713efea690bf212c76040f6.mockapi.io/Item');
  return response.data;
});

export const createData = createAsyncThunk('api/createData', async (newData) => {
  const response = await axios.post('https://6713efea690bf212c76040f6.mockapi.io/Item', newData);
  return response.data;
});

export const updateData = createAsyncThunk('api/updateData', async ({ id, updatedData }) => {
  const response = await axios.put(`https://6713efea690bf212c76040f6.mockapi.io/Item/${id}`, updatedData);
  return response.data;
});

export const deleteData = createAsyncThunk('api/deleteData', async (id) => {
  await axios.delete(`https://6713efea690bf212c76040f6.mockapi.io/Item/${id}`);
  return id;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(item => item.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;