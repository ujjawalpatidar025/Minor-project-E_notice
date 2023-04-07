import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import messageReducer from '../features/messages/messageSlice'
import queriesReducer from '../features/query/queriesSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    messages: messageReducer,
    queries:queriesReducer
  },
});
