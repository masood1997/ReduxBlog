import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, author: 'Masood' },
  { id: 2, author: 'Guriya' },
  { id: 3, author: 'Midan' }
];

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const allUsers = (state) => state.user;
export default usersSlice.reducer;
