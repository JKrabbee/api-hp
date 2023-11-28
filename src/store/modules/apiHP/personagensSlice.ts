import { createSlice } from "@reduxjs/toolkit";
import buscarPersonagens from "./actions";

interface Personagem {
  image: string;
  name: string;
  house: string;
}

interface InitialState {
  loading: boolean;
  data: Personagem[];
}

const initialState: InitialState = {
  loading: false,
  data: [],
};

const personagensSlice = createSlice({
  name: "personagens",
  initialState,
  // ações sincronas
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buscarPersonagens.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(buscarPersonagens.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.loading = false;
      state.data = action.payload;
      return state;
    });
  },
});

export default personagensSlice.reducer;
