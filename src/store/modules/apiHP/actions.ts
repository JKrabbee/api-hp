import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: URL,
});

const buscarPersonagens = createAsyncThunk("pesquisar", async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch {
    return null;
  }
});

export default buscarPersonagens;
