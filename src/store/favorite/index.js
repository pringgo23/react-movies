import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },

  reducers: {
    setFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      const findIndex = state.favorites.findIndex(
        (el) => el.id === action.payload
      );
      if (findIndex >= 0) {
        state.favorites.splice(findIndex, 1);
      }
    },
  },
});

export const { setFavorites, removeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
