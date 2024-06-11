import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';
import jobSlice from './slices/jobSlice';
import interviewSlice from './slices/interviewSlice';
import jobListSlice from './slices/jobListSlice';

// Import other slice reducers here
const rootReducer = combineReducers({
      user: userReducer,
      job: jobSlice,
      interview: interviewSlice,
      jobList: jobListSlice

});

export default rootReducer;
