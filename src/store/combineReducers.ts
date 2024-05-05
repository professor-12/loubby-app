import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';
import jobSlice from './slices/jobSlice';
import interviewSlice from './slices/interviewSlice';

// Import other slice reducers here
const rootReducer = combineReducers({
      user: userReducer,
      job: jobSlice,
      interview: interviewSlice,
});

export default rootReducer;
