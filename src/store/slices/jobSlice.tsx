import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: "job",
    initialState: {},
    reducers: {
        fetchJobs(state, { payload }) {
            return { ...state, ...payload };
        },
    },
});

export default jobSlice.reducer;

export const { fetchJobs } = jobSlice.actions;
