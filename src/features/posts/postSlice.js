import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'First Post', description: 'Welcome to my first Post on React Redux' },
  { id: 2, title: 'Second Post', description: 'Bla Bla Bla' }
];

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // Since state is mutable in createSlice, you can push directly
        const id = state.length ? state[state.length - 1].id + 1 : 1;
        state.push({...action.payload, id});
      },
      prepare(title, description, userId) {
        
        return {
          payload: {
            title,
            description,
            userId
          }
        };
      }
    }
  }
});

export const { addPost } = postSlice.actions;

export const allPosts = (state) => state.post;

export default postSlice.reducer;