import { createSlice } from "@reduxjs/toolkit";


const JobListSlice = createSlice({
      name: "joblist",
      initialState: {},
      reducers: {
            getActiveJobs(state, { payload }) {
                  return {
                        ...state, Active: { ...payload }
                  }
            },
            getInactiveJobs(state,{payload}) {
                  return {
                        ...state , Inactive: { ...payload }
                  }
            }
      }
})


export default JobListSlice.reducer


export const { getActiveJobs } = JobListSlice.actions