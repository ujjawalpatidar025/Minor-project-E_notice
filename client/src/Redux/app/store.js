import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import messageReducer from '../features/messages/messagesSlice'
import queriesReducer from '../features/query/querySlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    messages: messageReducer,
    queries:queriesReducer
  },
});
