import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from '../features/posts/postSlice';
import userSliceReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    post:postSliceReducer,
    user:userSliceReducer
  }
});

export default store
