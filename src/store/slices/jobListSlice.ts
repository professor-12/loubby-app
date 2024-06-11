import { createSlice } from "@reduxjs/toolkit";


const JobListSlice = createSlice({
      name: "joblist",
      initialState: {},
      reducers: {
            getActiveJobs(state, { payload }) {
                  return {
                        ...state, active: { ...payload }
                  }
            }
      }
})


export default JobListSlice.reducer


export const { getActiveJobs } = JobListSlice.actions