import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: 'favorites',

  initialState,
  reducers: {
    addBookmarkToStore: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookmarkToStore: (state, action) => {
      state.value = state.value.filter(e => e != action.payload)
    }
  },
});

export const { addBookmarkToStore, removeBookmarkToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;