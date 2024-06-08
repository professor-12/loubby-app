import { createSlice } from "@reduxjs/toolkit";

const InterViewSlice = createSlice({
      name: "Interview",
      initialState: {},
      reducers: {
            fetchInterView(state, { payload }) {
                  return {...state,...payload}
            }
      }
})

export default InterViewSlice.reducer

export const { fetchInterView } = InterViewSlice.actions